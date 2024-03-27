type Props = {
  name: string
  age?: number
}

const Hello  = ({name, age = 18}: Props) => (
  <div>
    <h1>您好，我叫：{name}, 我今年{age}岁了</h1>
  </div>
)

// Hello.defaultProps = {
//   name: 'Tom',
//   age:22
// }
// 为可选属性设置默认值 两种方式
const App = ()=>(
  <div>
    <Hello name='JACK' age={19}/>
  </div>
)
export default App
