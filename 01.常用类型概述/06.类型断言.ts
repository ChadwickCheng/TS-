/*
我比ts更明确一个值类型，使用断言指定

比如获得link，类型是HTMLElement，但是我知道这个元素是a标签，所以我可以使用断言指定类型。不指定则无法从大范围的HTMLElement中找到a标签的href属性

1. as关键字
2. as后是一个更具体的类型
3. 也可以使用<>语法 不常用,并且与jsx语法冲突

console.dir()打印dom元素在最后可以看到该元素类型
*/
const link = document.querySelector('a') as HTMLAnchorElement;
const link1 = <HTMLAnchorElement>document.querySelector('a');