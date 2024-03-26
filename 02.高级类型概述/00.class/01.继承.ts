/*
extends 继承父类

implements 实现接口(TS独占)
  实现接口意味着类中必须实现接口中定义的所有方法和属性
*/

// extends
class Animal {
  move(){console.log('move')}
}
class Dog extends Animal {
  bark(){console.log('bark')}
}
const dog = new Dog()

// implements
interface Singable {
  sing(): void
  a: number
}
class Singer implements Singable {
  sing(){console.log('sing')}
  a = 1
}

/*
在 TypeScript 中，extends 关键字主要在以下三种情况下使用：
  1. 类继承类
  2. 接口继承接口
  3. 泛型约束
*/