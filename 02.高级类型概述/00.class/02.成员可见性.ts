/*
控制class属性对于外部是否可见
  public：默认，公有成员可以被任何地方访问；可以直接省略；
  protected: 受保护成员只能在类和子类中访问；实例对象不可访问；子类通过this访问；
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