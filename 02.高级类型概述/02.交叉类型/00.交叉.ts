/*
交叉类型类似于接口继承extends，组合多个类型为一个类型，常用于对象类型。
使用&
新类型同时具备多个类型的特性。

接口继承vs交叉类型
相同点：
  1. 
*/
interface Person {name: string}
interface Contact {phone: number}
type PersonContact = Person & Contact
let obj: PersonContact = {name: 'yukiice', phone: 123456}