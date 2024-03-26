/*
交叉类型类似于接口继承extends，组合多个类型为一个类型，常用于对象类型。
使用&
新类型同时具备多个类型的特性。

接口继承vs交叉类型
相同点：
  1. 都可以实现对象类型的组合
不同点：
  1. 对于同名属性处理冲突不同
    - 接口继承：属性冲突会报错
    - 交叉类型：属性冲突会合并为联合类型
*/
interface Person {name: string}
interface Contact {phone: number}
type PersonContact = Person & Contact
let obj: PersonContact = {name: 'yukiice', phone: 123456}

// vs
interface A {
  fn: (val: number)=>string
}
// interface B extends A {
//   fn: (val: string)=>string
// }
interface B {
  fn: (val: string)=>string
}
type c = A & B
let obj1: c = {
  fn: (val: number|string)=>val.toString()
}