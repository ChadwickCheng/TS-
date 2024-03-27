/*
装饰器：修饰类
本身是一个函数

类创建后立即执行
类装饰器接受的参数是构造函数
多个装饰器执行顺序：从下往上 从右往左

使用工厂函数模式控制装饰器的可用性
*/

// function testDecorator(constructor: any): any{
//   constructor.prototype.getName = () => {
//     console.log('kuonji');
//   }
//   console.log('decorator');
// }

// function testDecorator1(constructor: any): any{
//   console.log('decorator1');
// }

// @testDecorator
// @testDecorator1
// class Test {

// }
// const test = new Test();
// (test as any).getName()




// ----------------------------

function testDecorator(flag: boolean){
  if(flag){
    return function(constructor: any){
      constructor.prototype.getName = () => {
        console.log('kuonji');
      }
    }
  }else{
    return function(constructor: any){}
  }
}

@testDecorator(true)
class Test {

}
const test = new Test();
(test as any).getName()