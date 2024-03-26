/*
很多类有通性，比如求面积，将其抽离出来作为抽象类。
方法前面加abstract代表这是一个抽象方法，具体实现具体分析。不是抽象方法就可以写具体实现。

抽象类只可以被继承不可以实例化
继承之后必须实现抽象方法

接口 vs 抽象类
接口只能定义方法，不能实现
抽象类可以实现方法
接口可以多继承
抽象类只能单继承
接口更轻量级
抽象类更丰富
*/

// abstract class Geom {
//   width: number;
//   getType(){
//     return 'Geom';
//   }
//   abstract getArea(): number;
// }

// class Circle extends Geom{
//   getArea(){
//     return Math.PI;
//   }
// }
// class Square {

// }
// class Triangle {

// }

interface Teacher {
  name: string
}

interface Student extends Teacher{
  age: number
}

const teacher = {
  name: 'dell',
}

const student = {
  name: 'lee',
  age: 18,
}

function getUserInfo(user: Teacher | Student){
  console.log(user.name);
}