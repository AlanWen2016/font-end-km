## Web高效编程

## 第一章 HTML/CSS


1. 使用hover
```html
<style>
.menu{display: none;}
.user:hover .menu{
    display: list-item;
}
</style>
<ul>
    <li class="user">用户
        <ul class="menu">
        <li>账户设置</li>
        <li>登出</li>
        </ul>
    </li>
</ul>
```

2. 修改radio/checkbox样式
```html
<style>
.c-checkbox iniput[type=checkbox]{
    display: none;
}
.checkbox{
    /* 自定义样式 */
}
input[type=checkbox]:checked + .checkbox{
    /* 自定义样式 */
}
</style>
 <label class="c-checkbox">
            <span class="checkbox"></span>
            <input type="checkbox">
        </label>

```