/*
元组 Tuple：
场景：记录地图的经纬度坐标
数组会出现任意多的数字，我只希望出现固定的几个数字。
元组是另一种数组，确切的知道元素数量以及每个元素的类型。
*/
let pos: [number, number] = [100, 200];

/*
字面量类型
场景：配合联合类型，表示一组明确的可选值列表。比如贪吃蛇游戏上下左右
const定义的变量，值不可改变，类型就是'val'；也就是说某个特定的字符串可以作为类型出现，对象数字都可以作为类型使用。
相比于string更精准
*/
const str1 = 'hello ts';
let age: 18 = 18;
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
  console.log(direction);
}

/*
枚举
功能类似于字面量+联合类型，表示一组明确的可选值。
定义一组命名常量，描述一个值，该值可以是这些命名常量中的一个。

1. enum
2. 名称首字母大写
3. 枚举成员逗号分割
4. 直接当作注解使用

访问枚举成员：枚举名.成员名
枚举成员首个默认为0，后续自增长
某个成员设置为数字，后续根据这个数字自增长
要赋值字符串必须赋值给所有成员

ts的枚举不仅仅是类型，还提供值；其余类型仅仅是类型，编译时被移除，枚举会被编译为js代码。
一般情况还是推荐字面量类型搭配联合类型，直观简单高效。
*/
enum Direction {
  Up,
  Down,
  Left,
  Right
}
function changeDirection1(direction: Direction) {
  console.log(direction);
}
changeDirection1(Direction.Up);

/*
any
不推荐使用any！！！！！

隐式具有any：
  1. 声明变量不提供类型默认值
  2. 函数参数没有指定类型
*/

/*
unknown 不知道
never 不可能
*/