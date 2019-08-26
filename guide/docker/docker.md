# docker基础

### 1.前提知识
- Linux背景
- Git
- Go语言编写的容器技术
- 与jenkins整合


## docker
- 解决开发和部署在环境和和配置上差异
- 集群部署
Docker本身是一个容器运行载体，我们把运用程序打包好形成一个可交付的运行环境，这个打包好的运行环境就是镜像文件。镜像文件可以看作是容器的模板。


## centOS 安装docker安装

[官方安装文档](https://docs.docker.com/install/linux/docker-ce/centos/)
 
 安装步骤:


 - 卸载旧版本docker
 ```
sudo yum remove docker \
docker-client \
docker-client-latest \
docker-common \
docker-latest \
docker-latest-logrotate \
docker-logrotate \
docker-engine
 ```
- 查看docker安装信息、版本
```
docker info
docker version
```

- 安装依赖包

```
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

```
- 安装docker-ce版本、docker-cli
```
sudo yum install docker-ce docker-ce-cli containerd.io
```
- 启动docker后台服务
```
sudo systemctl start docker
```
- 测试docker后台服务
```
docker run hello-world
```


### docker的镜像：
 运行文档、配置环境、环境、运行依赖包、操作系统发行版、内核

docker的理念： 一处封装，到处运行

### docker用途

- 区别虚拟机
虚拟机： 带环境安装的一种解决方案，虚拟机技术是在一种操作系统里面运行另一种操作系统

1. 在宿主机OS上运行虚拟机OS
2. 镜像文件大
3. 操作系统额外的CPU、内存消耗
4. 笨重、与虚拟化技术耦合度搞
5. 面向硬件运维者
6. 较慢

- docker优点
1.与宿主机共享OS
2.镜像文件小
3.易移植
4.部署快


轻量，简单，centos镜像一百多M


### Docker的架构图

- client
docker build
docker pull
docker run 

- docker_host
containers
images

- registry

三大要素： 
1. 镜像： image文件生成的容器实例，本身也是一个文件，称为镜像文件
2. 容器： 用镜像创建的运行实例
3. 仓库： 集中存放镜像文件的场所


## docker命令

```
docker --help


## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker images
docker image ls

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all
docker container ls -aq



docker build -t friendlyhello .  # Create image using this directory's Dockerfile
docker run -p 4000:80 friendlyhello  # Run "friendlyhello" mapping port 4000 to 80
docker run -d -p 4000:80 friendlyhello         # Same thing, but in detached mode
docker container ls                                # List all running containers
docker container ls -a             # List all containers, even those not running
docker container stop <hash>           # Gracefully stop the specified container
docker container kill <hash>         # Force shutdown of the specified container
docker container rm <hash>        # Remove specified container from this machine
docker container rm $(docker container ls -a -q)         # Remove all containers
docker image ls -a                             # List all images on this machine
docker image rm <image id>            # Remove specified image from this machine
docker image rm $(docker image ls -a -q)   # Remove all images from this machine
docker login             # Log in this CLI session using your Docker credentials
docker tag <image> username/repository:tag  # Tag <image> for upload to registry
docker push username/repository:tag            # Upload tagged image to registry
docker run username/repository:tag                   # Run image from a registry


attach    Attach to a running container                 # 当前 shell 下 attach 连接指定运行镜像
build     Build an image from a Dockerfile              # 通过 Dockerfile 定制镜像
commit    Create a new image from a container changes   # 提交当前容器为新的镜像
cp        Copy files/folders from the containers filesystem to the host path   #从容器中拷贝指定文件或者目录到宿主机中
create    Create a new container                        # 创建一个新的容器，同 run，但不启动容器
diff      Inspect changes on a container's filesystem   # 查看 docker 容器变化
events    Get real time events from the server          # 从 docker 服务获取容器实时事件
exec      Run a command in an existing container        # 在已存在的容器上运行命令
export    Stream the contents of a container as a tar archive   # 导出容器的内容流作为一个 tar 归档文件[对应 import ]
history   Show the history of an image                  # 展示一个镜像形成历史
images    List images                                   # 列出系统当前镜像
import    Create a new filesystem image from the contents of a tarball # 从tar包中的内容创建一个新的文件系统映像[对应export]
info      Display system-wide information               # 显示系统相关信息
inspect   Return low-level information on a container   # 查看容器详细信息
kill      Kill a running container                      # kill 指定 docker 容器
load      Load an image from a tar archive              # 从一个 tar 包中加载一个镜像[对应 save]
login     Register or Login to the docker registry server    # 注册或者登陆一个 docker 源服务器
logout    Log out from a Docker registry server         # 从当前 Docker registry 退出
logs      Fetch the logs of a container                 # 输出当前容器日志信息
port      Lookup the public-facing port which is NAT-ed to PRIVATE_PORT    # 查看映射端口对应的容器内部源端口
pause     Pause all processes within a container        # 暂停容器
ps        List containers                               # 列出容器列表
pull      Pull an image or a repository from the docker registry server   # 从docker镜像源服务器拉取指定镜像或者库镜像
push      Push an image or a repository to the docker registry server    # 推送指定镜像或者库镜像至docker源服务器
restart   Restart a running container                   # 重启运行的容器
rm        Remove one or more containers                 # 移除一个或者多个容器
rmi       Remove one or more images             # 移除一个或多个镜像[无容器使用该镜像才可删除，否则需删除相关容器才可继续或 -f 强制删除]
run       Run a command in a new container              # 创建一个新的容器并运行一个命令
save      Save an image to a tar archive                # 保存一个镜像为一个 tar 包[对应 load]
search    Search for an image on the Docker Hub         # 在 docker hub 中搜索镜像
start     Start a stopped containers                    # 启动容器
stop      Stop a running containers                     # 停止容器
tag       Tag an image into a repository                # 给源中镜像打标签
top       Lookup the running processes of a container   # 查看容器中运行的进程信息
unpause   Unpause a paused container                    # 取消暂停容器
version   Show the docker version information           # 查看 docker 版本号
wait      Block until a container stops, then print its exit code   # 截取容器停止时的退出状态值
 

// 镜像列表
docker images

// 查找镜像
docker search ...

// 下载镜像,使用tag确定版本
docker pull tomcat  //等价于 docker pull tomcat:latest

// 删除镜像
docker rmi hello-world

docker start imageId

// 查看运行的容器
docker ps 

docker stop

docker kill

// Ctrl + P + Q 退出当前

```



## 装centos镜像

```
//
docker run -it --name mycentos
```

// 
```
docker run -d centos /bin/sh -c "while true; do echo hello docker;sleep 2; done"
```

## 容器镜像

- 自定义镜像
```
// 提交镜像
docker commit 

```

## docker容器数据卷

1.容器数据持久化
2.容器之间共享数据

// redis分布式式的内存持久化

```
docker cp // 从容器内拷贝文件到目的主机
```

- 直接命令添加
- dockerFile添加
- 备注

docker run -it -v /宿主机绝对路径目录：/容器内目录 镜像名

docker run -it /myDataVolumn:/dataVolumnContainer imageNames

Notes: 
此时宿主机下的myDataVolumn与容器内dataVolumnContainer实现目录共享


## docker数据管理

### 基本概念
- 1. 数据卷（Data Volumes）:容器内数据直接映射到本地主机环境
- 2. 数据卷容器（Data Volumn Containers）: 使用特定的容器维护数据卷

### 重点
- a. 如何在容器内创建数据卷
- b. 如何把本机的目录或文件目录或者文件挂载到容器内的数据卷中
- c. 数据卷容器和容器和主机、容器和容器之间共享数据
- d.


## 使用dockerfile创建镜像


Dockerfile是一个文本格式的配置文件，用户可以使用dockerfile来快速自定义的镜像。

构建步骤： dockerfile编写-> docker build -> docker run 
重点：
- 1. dockerfile典型的基本结构
- 2. 相关指令
- 3. 最佳实践


> Dockerfile基本结构
看看下载镜像centos的dockerfile结构

```Dockerfile
From centos:



```





