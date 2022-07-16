import React, { FC } from 'react'

const App: FC = () => {
  return (
    <div>
      hello clientXXX
      <button onClick={ () => console.log('button1 click') }>test1</button>
      <button onClick={ () => console.log('button2 click') }>test2</button>
    </div>
  )
}

export default App