import React from 'react'

const Hello  = () => {
  // const onClick = () => {
  //   console.log('点赞成功')
  // }
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('点赞成功',e.currentTarget)
  }
  // 不知道类型先写e=>{}来获取提示
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('输入的值',e.currentTarget.value)
  }
  return (
    <div>
      <button onClick={onClick}>点赞</button>
      <input onChange={onChange} />
    </div>
  )
}

const App = ()=>(
  <div>
    <Hello/>
  </div>
)
export default App
