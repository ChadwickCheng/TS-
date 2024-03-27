// /*
// 访问器装饰器
// 参数类型与方法装饰器一样
// 不可以同时给getset使用同名的装饰器
// */
// function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor){
//   descriptor.writable = false;
// }

// class Test {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
//   get name(){
//     return this._name;
//   }
//   @visitDecorator
//   set name(name: string){
//     this._name = name;
//   }
// }

// const test = new Test('lee');
// console.log(test.name);
