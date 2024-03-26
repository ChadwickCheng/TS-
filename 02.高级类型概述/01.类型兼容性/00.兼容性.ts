let arr: string[] = ['a','b','c'];

arr.forEach(item=>{});
arr.forEach((item, idx)=>{});
arr.forEach((item, idx, arr)=>{});

/*
两种类型系统：
  1. 结构化类型系统 TS
  2. 标明类型系统 c# java
TS使用1，又称为鸭子类型，类型检查关注的是值具有的形状；如果两个对象具有相同的形状，则它们属于同一类型。

对于对象类型，y的成员至少与x相同，x兼容y(成员多可以赋值给成员少)
接口兼容，函数兼容,class与接口兼容
*/
class Point {x: number; y: number}
class Point2D {x: number; y: number}
class Point3D {x: number; y: number; z: number}
const p: Point = new Point2D(); // OK
const p2: Point2D = new Point3D(); // OK

// 接口兼容
interface Ipoint {x: number; y: number}
interface Ipoint2D {x: number; y: number}
let ip: Ipoint = {x: 1, y: 2};
let ip2: Ipoint2D = ip;
// 接口与class
class Ipoint3D {x: number; y: number; z: number}
let ip3: Ipoint = new Ipoint3D();

/*
函数兼容：
  1. 参数个数
    参数少可以赋值给参数多
    比如forEach接受的回调可以传入三个参数，但是我们只传入一个参数，这是兼容的
  2. 参数类型
    相同位置的参数：
      1. 原始类型要相同
      2. 对象类型要兼容
        这里与对象兼容有出入；将对象拆开，每个属性看作一个参数，参数少的可以赋值给参数多的
  3. 返回值类型
    1. 返回原始类型要相同
    2. 返回对象类型要兼容，这里的兼容与对象兼容相同，多的可以赋值给少的
*/
type F2 = (p: Point2D)=>void
type F3 = (p: Point3D)=>void
let f2: F2 = (p: Point)=>{};
let f3: F3 = f2;
// f2 = f3; 错误，这与对象兼容相反