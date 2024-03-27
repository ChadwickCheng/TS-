const userInfo: any = undefined;

// class Test{
//   getNMame(){
//     try {
//       return userInfo.name;
    
//     }catch(e){
//       console.log('userInfo.name不存在');
//     }
//   }
//   getAge(){
//     try {
//       return userInfo.age;
//     }catch(e){
//       console.log('userInfo.age不存在');
//     }
//   }
// }
function catchErr(msg: string){
  return function (target:any, key: string, descriptor: PropertyDescriptor){
    const fn = descriptor.value;
    descriptor.value = function(){
      try {
        fn();
      }catch(e){
        // console.log('error:', e);
        console.log(msg);
      }
    }
  }
}

class Test{
  @catchErr('userInfo.name不存在')
  getNMame(){
    return userInfo.name;
  }
  @catchErr('userInfo.age不存在')
  getAge(){
    return userInfo.age;
  }
}

const test = new Test();
console.log(test.getNMame());

/*
每个方法都要写try catch，代码冗余，使用装饰器模式，抽离try catch
*/