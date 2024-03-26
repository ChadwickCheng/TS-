/*
类型可以省略
泛型接口是必须提供的
*/
class GenericNumber<NumType> {
  defaultValue: NumType
  add: (x: NumType, y: NumType) => NumType
}
const myNum = new GenericNumber<number>()// 不给类型就是unknown。在设置了构造函数时，可以省略不写
myNum.defaultValue = 0
myNum.add = function(x, y){
  return x + y
}

class GenericNumber1<NumType> {
  defaultValue: NumType
  add: (x: NumType, y: NumType) => NumType
  constructor(defaultValue: NumType){
    this.defaultValue = defaultValue
  }
}
const myNum1 = new GenericNumber1(0)