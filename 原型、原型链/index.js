var obj = {
  a: 3,
};
// 属性访问：实际上实现了[[GET]]操作，对象默认的[[Get]]操作首先查找对象中是否有名称相同的属性，如果有就返回属性的值；如果没有，会按照[[GET]]算法的定义会在原型链中查找，当原型链中有该属性就返回它的值，如果找到尽头还是没有找到，那么就会返回undefined。

console.log((obj.a = 1), obj.b, "打印");
// 构造形式
var arr = new Object();
arr.a = 'zhangsan';
console.log(arr.a, '原型')