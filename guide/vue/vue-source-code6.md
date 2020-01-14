## 响应式原理

先看下示例代码
```html
<div id="app" @click="changeMsg">
  {{ message }}
</div>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        },
        methods: {
            changeMsg() {
                this.message = 'message change'
            }
        }
    })
</script>
```
🤔思考一下，点击修改message属性值，Vue是如何一步一步完成DOM渲染？Vue要解决什么问题？
- 1. 如何监测到数据的修改？
- 2. 要修改哪一块dom?
- 3. 修改dom流程中的性能问题？

### 如何监测数据变化-响应式数据

#### 响应式数据之Object.defineProperty
IE8以及IE8没有这个函数，所以Vue是不兼容IE8的

#### 响应式

通过响应式对象


```js
/**
 * Define a reactive property on an Object.
 */
function defineReactive (obj, key,val, customSetter,shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
```