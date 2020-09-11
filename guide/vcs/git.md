# Git


## git cherry-pick

- git cherry-pick， 会获取摸一个分支的单笔提交，病作为一个新的提交引入到你当前分支。敌我们需要本地何如其他分支的提交时，如果不想整个分支进行合并， 就可以使用git cherry-pick




## git branch管理

- 查看全部分支
```
git branch -a
```

- 查看分支：git branch

- 创建分支：git branch <name>

- 切换分支：git checkout <name>或者git switch <name>

- 创建+切换分支：git checkout -b <name>或者git switch -c <name>

- 合并某分支到当前分支：git merge <name>

- 删除分支：git branch -d <name>

- 删除本地分支
```
git branch --delete <branchName>
```
- 删除远程分支
```
git push origin --delete <branchName>
```

