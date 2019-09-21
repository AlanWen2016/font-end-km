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

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)

```
算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（.）分隔，就可以返回给用户。
::: tip
验签算法实现方案
:::

```php
// php实现
<?php>
    

</php>
```
```js
// 使用express实现

```

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
[]()
[]()