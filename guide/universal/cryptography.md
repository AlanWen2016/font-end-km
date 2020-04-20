# 密码学


## 非对称加密

### 讲一个小程序用例：

### 1. 前端js库 [jsencrypt](https://github.com/travist/jsencrypt)

#### 1.1 引入jsencrypt.min.js, 其中由于小程序没有全局大navigator对象，导致此js库报错。需手动加入这个对象

```js
var navigator = {
  appName: 'Netscape',
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46     (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
};
var window = {
  ASN1: null,
  Base64: null,
  Hex: null,
  crypto: null,
  href: null
};
// ...jsencrypt.min.js
```
#### 1.2 封装加密函数
```js
import JSEncrypt from './lib/jsencrypt.min.js'

class RSAEncrypt {
    constructor(publicKey, privateKey){
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.jsEncrypt = new JSEncrypt();
        this.closeEncrypt = false;
    }
    encrypt(encryptString) {
      if (this.closeEncrypt) return encryptString;
        this.jsEncrypt.setPublicKey(this.publicKey);
        let encrypted = this.jsEncrypt.encrypt(encryptString);
        return encrypted;
    }
  decrypt(decryptStr){
    if(!this.privateKey){
      console.warn('decrypt private key not been set')
    }
    this.jsEncrypt.setPrivateKey(this.privateKey);
    let uncrypted = this.jsEncrypt.decrypt(decryptStr);
    return uncrypted
  }
}
let encryptInstance;
function Encrypt(){
    // 配置公私秘钥
    let publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCfO2yBdE+oqs/3jYKZC7tDMgcd
aVnk3LJB87rMXaXnyq8/PI5VqaBCfAdkpI11SfOiXdW0HFzTnt3ar3z/Pp8MVx0Z
MotKjnxJr6zGDTTFuQIDAQAB
-----END PUBLIC KEY-----`;
    let privateKey = '';
    return (encryptInstance = new RSAEncrypt(publicKey, privateKey))
}

module.exports = new Encrypt();
```

#### 1.3 公私秘钥的生成方法
```
// Within your terminal (Unix based OS) type the following.
openssl genrsa -out rsa_1024_priv.pem 1024
// 获取私钥
cat rsa_1024_priv.pem

// 通过私钥产生公钥
openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem

// 获取公钥
cat rsa_1024_pub.pem
```

#### 1.4 rsa私钥转pkcs8格式
PKCS1私钥转换为PKCS8(该格式一般Java调用)
// pkcs1格式：
-----BEGIN RSA PRIVATE KEY-----
-----END RSA PRIVATE KEY------
 
// pkcs8格式：
-----BEGIN PRIVATE KEY-----
-----END PRIVATE KEY-----

```ssh
// pksc1->pkcs8
openssl pkcs8 -topk8 -inform PEM -in rsa_1024_priv.pem -outform pem -nocrypt -out rsa_1024_priv_pkcs8.pem
```

> 说明： 由pkcs8私钥加密出来到公钥跟pkcs1格式私钥加密出来到公钥是一样到。
