import React from 'react'

type State = {
  count: number
}
type Props = {
  msg?: string
}

class C1 extends React.Component {}
class C2 extends React.Component<Props> {}
class C3 extends React.Component<{}, State> {}
class C4 extends React.Component<Props, State> {}

const App = ()=>(
  <div>
    
  </div>
)
export default App
