/*
复杂对象类型被多次使用，使用 接口 简化代码

1. 使用interface定义接口
2. 接口名称任意合法
3. 直接使用

type vs interface
相同：
  都可以给对象指定类型
区别：
  1. 接口只为对象类型服务
  2. 类型别名可以为任意类型服务

接口继承：
  两个接口有相同属性，将其抽离，继承实现复用
  使用extends
*/
interface IPerson {
  name: string
  age: number
  sayHi(): void
}
let iPerson: IPerson = {
  name: 'zhang',
  age: 18,
  sayHi() {
    console.log('hi');
  }
}

// 继承
interface Point2D {x: number, y: number}
interface Point3D extends Point2D {z: number}
let p3: Point3D = {x: 1, y: 2, z: 3}