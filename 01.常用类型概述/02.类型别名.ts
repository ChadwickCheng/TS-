/*
复杂类型被多次使用，使用 类型别名 简化代码

1. 使用type创建类型别名
2. 类型别名可以是任何类型
3. 直接使用
*/

type nsa = (number | string)[];
let n4: nsa = [1, 'two'];