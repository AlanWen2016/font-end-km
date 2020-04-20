# Laravel简单应用

### 1.使用composer 安装laravel项目

#### 1.1 composer安装，略

#### 1.2 composer镜像和加速
镜像安装文档
https://www.phpcomposer.com/
```
composer config -g repo.packagist composer https://packagist.phpcomposer.com
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


