// /*
// 属性装饰器
// target: 类的原型对象
// key: 属性名
// 没有描述符，需要新建
// */
// function nameDecorator(target: any, key: string): any {
//   console.log(target, key);
//   // const descriptor: PropertyDescriptor = {
//   //   writable: false
//   // };
//   // return descriptor;
//   target[key] = 'lee';// 不能直接修改属性，只是修改原型
// }

// class Test {
//   @nameDecorator
//   name = 'dell';
// }

// const test = new Test();
// // test.name = 'lee';//报错
// console.log(test.name);
