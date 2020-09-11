# immutable data不可变数据


## immutable数据结构类型

- List: 有序索引集，类似JavaScript中的Array。
- Map: 无序索引集，类似JavaScript中的Object。
- OrderedMap: 有序的Map，根据数据的set()进行排序。
- Set: 没有重复值的集合。
- OrderedSet: 有序的Set，根据数据的add进行排序。
- Stack: 有序集合，支持使用unshift()和shift()添加和删除。
- Record: 一个用于生成Record实例的类。类似于JavaScript的Object，但是只接收特定字符串为key，具有默认值。
- Seq: 序列，但是可能不能由具体的数据结构支持。
- Collection: 是构建所有数据结构的基类，不可以直接构建。


## 常用Api


 - fromJS
 - toJS
 - is 比较hashCode和valueof值


 - list/map
 ```js
 //List
Immutable.List(); // 空List
Immutable.List([1, 2]);

//Map
Immutable.Map(); // 空Map
Immutable.Map({ a: '1', b: '2' });
 ```

> 嵌套数组或者对象的操作
```js

//获取List索引的元素
ImmutableData.get(0);

// 获取Map对应key的value
ImmutableData.get('a');

// 获取嵌套数组中的数据
ImmutableData.getIn([1, 2]);

// 获取嵌套map的数据
ImmutableData.getIn(['a', 'b']);

const nested = fromJS({ a: { b: { c: [ 3, 4, 5 ] } } });

const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } });
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }

console.log(nested2.getIn([ 'a', 'b', 'd' ])); // 6

const nested3 = nested2.updateIn([ 'a', 'b', 'd' ], value => value + 1);
console.log(nested3);
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }

const nested4 = nested3.updateIn([ 'a', 'b', 'c' ], list => list.push(6));
```


- has/hasIn
- includes 判断是否存在某一个value
- first() 、 last()

- set/setIn
- delete/deleteIn

- update 对源数据进行更新   
```js
const list = List([ 'a', 'b', 'c' ])
const result = list.update(2, val => val.toUpperCase())
```

- concat 对象的拼接，用法与js数组中的concat()相同，返回一个新的对象
- list相关操作： push, pop, shift, unshift, insert

- merge相关操作： 
-- merge 浅合并，新数据与旧数据对比，旧数据中不存在的属性直接添加，就数据中已存在的属性用新数据中的覆盖
-- mergeDeep 深合并，新旧数据中同时存在的的属性为新旧数据合并之后的数据
-- mergeIn 对深层数据进行浅合并
-- mergeDeepIn 对深层数据进行深合并
-- mergrDeepWith 自定义深合并，可自行设置某些属性的值

- Map对象相关api
-- map
-- mapKey
-- mapEntries
-- filter 返回一个新的对象，包括所有满足过滤条件的元素

- reverse翻转List/Map
- 排序 sort & sortBy