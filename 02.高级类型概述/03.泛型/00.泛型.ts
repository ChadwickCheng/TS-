function id<Type>(val: Type): Type{
  return val;
}
const num = id<number>(10);
// 函数class接口同时接收多种类型并保证类型安全
// 利用类型推断省略类型参数，能省则省；类型不准确则显示传入
const str = id('hello');

class User<T> {
  constructor(public name: T) {}
}

interface IUser<T> {
  name: T;
}

/*
泛型约束
传入一个数组，不知道是数组，无法调用.length; 使用约束限定范围

方式：
  1. 指定更具体类型
  2. 添加约束
*/
// 1. 指定更具体类型
function id1<T>(val: T[]): T[]{
  console.log(val.length);
  return val;
}
// 2. 添加约束
interface ILength {// 传入的类型必须有length属性
  length: number
}
function id2<T extends ILength>(val: T): T{
  console.log(val.length);
  return val;
}

/*
泛型类型变量可以有多个
*/
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
function getProp<T, K extends keyof T>(src: T, key: K){
  return src[key];
}
getProp('abc', 1)// 索引