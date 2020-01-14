# Laravel简单应用

### 1.使用composer 安装laravel项目

#### 1.1 composer安装，略
#### 1.2 composer镜像和加速
    Composer 中国全量镜像』是由 Laravel China 社区联合 又拍云 与 优帆远扬 共同合作推出的公益项目，旨在为广大 PHP 用户提供稳定和高速的 Composer 国内镜像服务
```
composer config -g repo.packagist composer https://packagist.laravel-china.org
```

### 2.git使用和将项目push到github上去

#### 2.1 github新建仓库
#### 2.2 git使用

##### 2.2.1 在本地开发，将项目纳入git版本管理中：

```
$ cd ~/Code/larabbs
$ git init
$ git add -A
$ git commit -m "Initial commit"
```


##### 2.2.2 将项目push到github:

```
$ git remote add origin git@github.com:<username>/larabbs.git
$ git push -u origin master

```

##### 2.2.3 从github拉取项目

```
git clone https://github.com/AlanWen2016/hello_laravel/tree/8176cc10354d75c6f1c4e9658b0b2208ee7474f1
```


