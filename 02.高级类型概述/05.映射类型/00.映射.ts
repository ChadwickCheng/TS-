/*
基于旧类型创建新类型

映射类型基于索引类型，语法相似[]
只可以在类型别名使用，接口无法使用

泛型工具类型都是基于映射类型实现的
*/

type PropKeys = 'x' | 'y' | 'z';
// type Type1 = {
//   x: number
//   y: number
//   z: number
// }
type Type1 = {[Key in PropKeys]: number}

// 根据对象类型创建新类型
type Props = {
  a: number
  b: string
  c: boolean
}
type Type2 = { [key in keyof Props]: number }

type MyPartial<T> = {
  [P in keyof T]?: T[P]
}
type Type3 = MyPartial<Props>
/*
T[P] 索引访问类型
用来查询属性的类型 注意写字符串，带''
*/
type TypeA = Props['a'] // number
type TypeB = Props['a' | 'b']
type TypeC = Props[keyof Props]