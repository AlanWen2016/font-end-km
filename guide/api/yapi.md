# 接口管理平台





openssl pkcs8 -topk8 -inform PEM -in rsa_1024_priv.pem -outform pem -nocrypt -out private_pkcs8.pem


作者：徐浩友
链接：https://www.jianshu.com/p/f18304b1b513
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



openssl rsa -in private_pkcs8.pem -pubout -out rsa_public_key_8.pem



_____

参考资料：
1. [github-Yapi](https://github.com/ymfe/yapi)