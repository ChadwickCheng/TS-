import React from 'react'

type State = {
  count: number
}

class Counter extends React.Component<unknown, State>{
  state: State = {
    count: 0
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render(){
    return(
      <div>
        计数器: {this.state.count}
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

const App = ()=>(
  <div>
    <Counter/>
  </div>
)
export default App
