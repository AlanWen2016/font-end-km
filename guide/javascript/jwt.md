# JWT认证

JSON WEB令牌，目前比较流行的跨域解决方案,开放标准(RFC 7519),使用JSON对象进行数据传递，通过签名进行信息验证。

### 常规认证流程和存在问题
用户使用账号密码登陆后，服务端在当前会话（session）储存用户信息，并向客户端返回session_id存入cookie。随后的每个请求，cookie都会带上这个session_id想服务端进行验证，已确定用户的身份。
这种方案在集群和跨域的站点，就需要实现session共享、是每台服务器都能读取到这个session。把session写的redis或者db可以解决这个问题。

### 实现方案、安全问题

用户登陆到服务端后，服务端返回给客户端一个JSON对象。JWT对象分为三部分：
- Header（头部）
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```
- Payload（负载）

Payload部分，官方规定了7个字段，也可以定义部分私有字段，比如用户信息
```
iss (issuer)：签发人
exp (expiration time)：过期时间
sub (subject)：主题
aud (audience)：受众
nbf (Not Before)：生效时间
iat (Issued At)：签发时间
jti (JWT ID)：编号
```
- Signature（签名）
对前面两部分数据的签名，防止数据篡改。


```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)

```
算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（.）分隔，就可以返回给用户。


### JWT使用

客户端收到服务器返回的 JWT，可以储存在 Cookie 里面，也可以储存在 localStorage。
JWT放在 HTTP 请求的头信息Authorization字段里面。


### Vue项目在路由进行登陆前端校验

- vue-router配置的路由定义一个meta属性，标识为 meta:{needLogin: true}
- 在导航守卫里进行校验，不通过则跳到登陆页面
```
router.beforeEach(async (to, from, next) => {
  // 校验登陆态
  const isLogin = await store.dispatch('validate');
  if (isLogin) {
    // 如果是登录
    if (to.name === 'login') {
      next('/profile');
    } else {
      next();
    }
  } else {
    const flag = to.matched.some(item => item.meta.needLogin);
    if (flag) {
      next('/login');
    } else {
      next();
    }
  }
});
```

::: tip
验签算法实现方案
:::


```js
// 使用express实现
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method.toLowerCase() === 'options'){
        return res.end();
    }
    next();
})
app.use(bodyParser.json());
let secret = 'secret';
app.get('/test',(req,res)=>{
    res.send({
        code:1,
        data:'用户名不存在'
    })
})
app.post('/login',(req,res)=>{
   let {username} = req.body;
   if(username === 'admin'){ // 如果访问的是admin 种植cookie
        res.json({
            code:0,
            username:'admin',
            token:jwt.sign({username:'admin'},secret,{
                expiresIn:20
            })
        })
   }else{
       res.json({
           code:1,
           data:'用户名不存在'
       })
   }
});
app.get('/validate',(req,res)=>{
    let token = req.headers.authorization;
    jwt.verify(token,secret,(err,decode)=>{ // 验证token的可靠性
        if(err){
            return res.json({
                code:1,
                data:'token失效了'
            })
        }else{
            res.json({
                username:decode.username,
                code:0, // 延长token的过期时间
                token:jwt.sign({username:'admin'},secret,{
                    expiresIn:20
                })
            })
        }
    });
});
app.listen(3000);
```
### NODE服务实现步骤

- 1. 使用express，启动一个http服务
- 2. 配置CORS
- 3. 引入依赖包： jsonwebtoken



```php
// php实现
<?php>
/**
 * PHP实现jwt
 */
class Jwt {

    //头部
    private static $header=array(
        'alg'=>'HS256', //生成signature的算法
        'typ'=>'JWT'    //类型
    );

    //使用HMAC生成信息摘要时所使用的密钥
    private static $key='123456';


    /**
     * 获取jwt token
     * @param array $payload jwt载荷   格式如下非必须
     * [
     *  'iss'=>'jwt_admin',  //该JWT的签发者
     *  'iat'=>time(),  //签发时间
     *  'exp'=>time()+7200,  //过期时间
     *  'nbf'=>time()+60,  //该时间之前不接收处理该Token
     *  'sub'=>'www.admin.com',  //面向的用户
     *  'jti'=>md5(uniqid('JWT').time())  //该Token唯一标识
     * ]
     * @return bool|string
     */
    public static function getToken(array $payload)
    {
        if(is_array($payload))
        {
            $base64header=self::base64UrlEncode(json_encode(self::$header,JSON_UNESCAPED_UNICODE));
            $base64payload=self::base64UrlEncode(json_encode($payload,JSON_UNESCAPED_UNICODE));
            $token=$base64header.'.'.$base64payload.'.'.self::signature($base64header.'.'.$base64payload,self::$key,self::$header['alg']);
            return $token;
        }else{
            return false;
        }
    }


    /**
     * 验证token是否有效,默认验证exp,nbf,iat时间
     * @param string $Token 需要验证的token
     * @return bool|string
     */
    public static function verifyToken(string $Token)
    {
        $tokens = explode('.', $Token);
        if (count($tokens) != 3)
            return false;

        list($base64header, $base64payload, $sign) = $tokens;

        //获取jwt算法
        $base64decodeheader = json_decode(self::base64UrlDecode($base64header), JSON_OBJECT_AS_ARRAY);
        if (empty($base64decodeheader['alg']))
            return false;

        //签名验证
        if (self::signature($base64header . '.' . $base64payload, self::$key, $base64decodeheader['alg']) !== $sign)
            return false;

        $payload = json_decode(self::base64UrlDecode($base64payload), JSON_OBJECT_AS_ARRAY);

        //签发时间大于当前服务器时间验证失败
        if (isset($payload['iat']) && $payload['iat'] > time())
            return false;

        //过期时间小宇当前服务器时间验证失败
        if (isset($payload['exp']) && $payload['exp'] < time())
            return false;

        //该nbf时间之前不接收处理该Token
        if (isset($payload['nbf']) && $payload['nbf'] > time())
            return false;

        return $payload;
    }




    /**
     * base64UrlEncode   https://jwt.io/  中base64UrlEncode编码实现
     * @param string $input 需要编码的字符串
     * @return string
     */
    private static function base64UrlEncode(string $input)
    {
        return str_replace('=', '', strtr(base64_encode($input), '+/', '-_'));
    }

    /**
     * base64UrlEncode  https://jwt.io/  中base64UrlEncode解码实现
     * @param string $input 需要解码的字符串
     * @return bool|string
     */
    private static function base64UrlDecode(string $input)
    {
        $remainder = strlen($input) % 4;
        if ($remainder) {
            $addlen = 4 - $remainder;
            $input .= str_repeat('=', $addlen);
        }
        return base64_decode(strtr($input, '-_', '+/'));
    }

    /**
     * HMACSHA256签名   https://jwt.io/  中HMACSHA256签名实现
     * @param string $input 为base64UrlEncode(header).".".base64UrlEncode(payload)
     * @param string $key
     * @param string $alg   算法方式
     * @return mixed
     */
    private static function signature(string $input, string $key, string $alg = 'HS256')
    {
        $alg_config=array(
            'HS256'=>'sha256'
        );
        return self::base64UrlEncode(hash_hmac($alg_config[$alg], $input, $key,true));
    }
}





    //测试和官网是否匹配begin
    $payload=array('sub'=>'1234567890','name'=>'John Doe','iat'=>1516239022);
    $jwt=new Jwt();
    $token=$jwt->getToken($payload);
    echo "<pre>";
    echo 'token验签： '.$token;
    
    //对token进行验证签名
    $getPayload=$jwt->verifyToken($token);
    echo "<br><br>";
    var_dump($getPayload);
    echo "<br><br>";
    //测试和官网是否匹配end
    
    
    //自己使用测试begin
    $payload_test=array(
        'iss'=>'admin',
        'iat'=>time(),
        'exp'=>time()+7200,
        'nbf'=>time(),
        'sub'=>'testphp.com',
        'jti'=>md5(uniqid('JWT').time()));;
    $token_test=Jwt::getToken($payload_test);
    echo "<pre>";
    echo $token_test;
    
    //对token进行验证签名
    $getPayload_test=Jwt::verifyToken($token_test);
    echo "<br><br>";
    var_dump($getPayload_test);
    echo "<br><br>";
    //自己使用时候end
```
> php实现

- 初次登录：用户初次登录，输入用户名密码
- 密码验证：服务器从数据库取出用户名和密码进行验证
- 生成JWT：服务器端验证通过，根据从数据库返回的信息，以及预设规则，生成JWT
- 返还JWT：服务器的HTTP RESPONSE中将JWT返还
- 带JWT的请求：以后客户端发起请求，HTTP REQUEST
- HEADER中的Authorizatio字段都要有值，为JWT
- 服务器验证JWT
// TODO


### 缺点： 
第四条是JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个token，或者更改 token的权限。也就是说，一旦JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑

因为jwt一般会放在redis或者mysql表，只要逻辑上去找到uid对应的jwt，删了就可以了。


> 相关知识： 单点登陆

   单点登录（Single Sign On），简称为 SSO，SSO的定义是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。
单点登陆实现方案：共享cookie、通过JSONP、页面重定向、独立的登陆系统。实现方法可以参考这篇文章[单点登录（SSO）看这一篇就够了](https://yq.aliyun.com/articles/636281)。  
   一个单点登陆系统流程可以参考如下：
   1. 判断当前app应用是否登陆
   2. 若无登录，则跳转到登陆系统进行登陆
   3. 登陆完成，登陆系统生成一个Service Ticket,并跳转回app，写入登陆系统的Cookie。（这个cookie属于登陆系统域的，完成这个即代表用户已经通过单点登陆系统的认证）
   4. 当前app拿着这个sService Ticket去后台进行验证。（后台需要向登陆系统发送请求验证Service Ticket是否有效）
   5. 验证通过，则当前app可以种下自己的Cookie




[JSON Web Token 入门教程 - 阮一峰](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)   
[认识JWT](https://www.cnblogs.com/cjsblog/p/9277677.html)
[不要用JWT替代session管理](https://juejin.im/post/5b3b870a5188251ac85826b8)
[讲真，别再使用JWT了](http://insights.thoughtworkers.org/do-not-use-jwt-anymore/)  