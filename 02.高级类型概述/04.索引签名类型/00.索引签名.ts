/*
无法确定对象中有哪些属性，使用索引类型

[key: string] 只要是string类型的属性名称都可以出现
key只是一个占位符，可以是任意名称
*/
interface AnyObject{
  [key: string]: number
}
let obj: AnyObject = {
  a: 1,
  b: 2,
}

/*
数组的键(索引)是number，可以出现任意多元素，数组对应的泛型接口也使用了索引签名类型
*/
interface MyArr<T> {
  [idx: number]: T
}
let arr: MyArr<number> = [1, 2, 3]