/*
TS内置常用工具类型,基于泛型实现
Partial<T>  将所有属性变为可选
Required<T> 将所有属性变为必选
Readonly<T> 将所有属性变为只读
Record<K,T> 将K中所有属性的值转为T
Pick<T,K> 从T中取出K中的属性
*/

/*
Partial<T> 构造一个类型，将T的所有属性设置为可选
不改本身，构造出的类型结构相同，只是所有属性都变成了可选
*/
interface Props {
  id: string
  children: number[]
}
type PartialProps = Partial<Props>
let p1: Props = {
  id: '1',
  children: [1, 2]
}
let p2: PartialProps = {

}

/*
Readonly<T> 构造一个类型，将T的所有属性设置为只读
*/
type ReadonlyProps = Readonly<Props>
let p3: ReadonlyProps = {
  id: '1',
  children: [1, 2]
}
// p3.id = '2' 报错

/*
Pick<Type, Keys> 从Type中选择一组属性构造新类型
*/
type PickProps = Pick<Props, 'id'|'children'>

/*
Record<Keys, Type> 构建对象类型，属性键为Keys, 属性类型为Type
*/
type RecordObj = Record<'a'|'b'|'c', string[]>
let recordObj: RecordObj = {
  a: ['1'],
  b: ['2'],
  c: ['3']
}