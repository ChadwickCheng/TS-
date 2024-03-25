/*
原始类型直接 let a: type = xxx
*/

// 数组写法
// 1. 推荐
let n1: number[] = [1,2];
// 2.
let n2: Array<number> = [1,2];
// 3. 联合 |为ts的联合类型
let n3: (number | string)[] = [1, 'two'];


// 函数类型：为函数参数与返回值定义类型
// 1. 单独指定参数和返回值类型
function fn1(num1: number, num2: number): number{
  return num1 + num2;
}
const fn2 = (num1: number, num2: number): number => num1 + num2;
// 2. 同时指定参数和返回值类型；只适用于函数表达式
const fn3: (num1: number, num2: number) => number =
  (num1, num2) => num1 + num2;
// 3. void表示没有返回值 ts新增
function fn4(): void{
  console.log('void');
}
// 4. 可选参数 ?; 可选参数必须在必选参数后面
function mySlice(src: number[], start?: number, end?:number): void {
  console.log(src, start, end);
}


/*
对象类型；对象=属性+方法；描述对象的结构

1. 使用{}描述结构；属性为 属性名：类型；方法为 方法名():返回值类型
2. 方法有参数，在()内写参数名和类型
3. 一行代码指定多个属性类型用;分隔
  一行一个属性不用加;
  方法也可以用箭头函数形式
  属性可选
*/
let person: {name: string; age: number; sayHi(): void; greet?(name: string): void; meet?: (name: string)=>void} = {
  name: 'zhang',
  age: 18,
  sayHi() {
    console.log('hi');
  }
}