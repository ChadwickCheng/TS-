// class Person {
//   constructor(private _name: string){}
//   // 确保数据安全性
//   get name(){
//     return this._name + ' alice';
//   }
//   set name(name: string){
//     this._name = name;
//     console.log('修改成功');
//   }
// }
// const person = new Person('kuonji');
// console.log(person.name);
// person.name = 'Aozaki Aoko love';
// console.log(person.name);

// 实现单例模式
// 永远只生成一个实例,私有构造器让你用不了。
class Demo {
  private static instance: Demo;
  private constructor(){}
  static getInstance(){
    if(!this.instance){
      this.instance = new Demo();
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1 === demo2); // true