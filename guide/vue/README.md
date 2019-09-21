# Vue基础

## vue组件通讯方式

- props和$emit(.sync v-model)
- $parent和$children获取组件实例
实现$dispatch向上传递事件
实现$broadcast广播事件

- 事件和属性传递$attrs、$listener
- provide和inject 
父组件向子组件传递注入信息
- 获取实例$refs
通过组件实例获取组件的属性和方法
- EventBus
实例一个vue对象，并挂在vue原型上，因为这个实例也是响应式，用法分发事件和传递数据
- Vuex



