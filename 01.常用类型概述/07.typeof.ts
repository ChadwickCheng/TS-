/*
ts中的typeof操作符，既有原生js的用法，也可以用于类型上下文引用变量或属性的类型(类型查询)
场景：根据已有变量的值，获取该值的类型，简化书写
不能查询函数返回值的类型
*/
let p = {x: 1,y: 2}
function formatPoint1(point: {x: number, y: number}){}
function formatPoint2(point: typeof p){}