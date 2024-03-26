/*
控制class属性对于外部是否可见
  public：默认，公有成员可以被任何地方访问；可以直接省略；
  protected: 受保护成员只能在类和子类中访问；实例对象不可访问；子类通过this访问；
  private：私有的；当前类可见，实例以及子类不可见；
  readonly: 只读；防止在构造函数之外对属性赋值；可以在声明时赋值作为默认值；
    1. 只修饰属性
    2. 修饰的属性不加类型注解默认为字面量
    3. 接口或者{}的对象可以使用readonly修饰
    4. 不加类型注解不加初始值就是any类型
*/

class Animal {
  protected move(){
    console.log('move');
  }
  public run(){
    this.move();
    console.log('run');
  }
}
const a = new Animal();
// 只有a.run()

class Dog extends Animal{
  bark(){
    this.move();
    console.log('bark');
  }
}
const d = new Dog();
// 只有d.bark() d.run()

class Person {
  readonly age: number = 19
  constructor(age: number){
    this.age = age;
  }
}

interface IPerson {
  readonly name: string
}
const p: IPerson = {
  name: 'Tom'
}