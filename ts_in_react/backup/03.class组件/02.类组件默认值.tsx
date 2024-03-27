import React from 'react'

type Props = {
  name: string
  age?: number
}

class Hello extends React.Component<Props>{
  // static defaultProps: Partial<Props> = {
  //   age: 20
  // }// 默认属性 或者解构直接传入
  render(){
    const{name, age=20} = this.props
    return <div>{name},{age}</div>
  }
}

const App = ()=>(
  <div>
    <Hello name="rose"/>
  </div>
)
export default App
