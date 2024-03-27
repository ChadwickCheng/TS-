// import {FC} from 'react'

type Props = {
  name: string
  age?: number
}

// const Hello: FC<Props> = ({name, age}) => (
//   <div>
//     <h1>您好，我叫：{name}, 我今年{age}岁了</h1>
//   </div>
// )

const Hello  = ({name, age}: Props) => (
  <div>
    <h1>您好，我叫：{name}, 我今年{age}岁了</h1>
  </div>
)

const App = ()=>(
  <div>
    <Hello name='JACK' age={19}/>
  </div>
)
export default App
