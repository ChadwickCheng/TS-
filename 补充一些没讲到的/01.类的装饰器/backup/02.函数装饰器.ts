// /*
// 方法装饰器
// 普通函数，target是类的原型对象，key是函数名
// 静态方法：target是类的构造函数，key是函数名
// 第三个是描述符，参考Object.defineProperty
// */
// function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor){
//   console.log('我是装饰器', target, key);
//   // descriptor.writable = false;
//   // descriptor.value = function(){}// 重写方法
// }

// class Test {
//   name: string;
//   constructor(name: string) {
//     console.log('1');
//     this.name = name;
//   }
//   @getNameDecorator
//   getName(){
//     return this.name;
//   }
// }

// const test = new Test('lee');
// console.log(test.getName());
// // test.getName = function(){
// //   return '123';
// // }// 报错