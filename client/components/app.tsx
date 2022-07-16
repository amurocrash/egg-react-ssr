import React, { FC } from 'react'

const App: FC = () => {
  return (
    <div>
      hello clientXXX
      <button onClick={ () => console.log('hahaha xxx') }>test</button>
      <button onClick={ () => console.log('blablabla') }>testx</button>
    </div>
  )
}

export default App