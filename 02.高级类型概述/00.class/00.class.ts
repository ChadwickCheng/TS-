/*
class不仅是语法功能，也是类型

构造函数
  1. 成员初始化才可以访问
  2. 不需要返回值类型

实例方法注解方式与对象方法一样
*/

class Person {
  age: number
  gender = 'male'
  constructor(age: number, gender: string){
    this.age = age
    this.gender = gender
  }
  scale(n: number): void{
    this.age *= n
  }
}
const cP = new Person(18, 'female');