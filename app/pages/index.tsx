import React, { FC } from 'react'

const App: FC = () => {
  return (
    <div>
      <div>app</div>
      <button onClick={ () => console.log('hello') } >test</button>
    </div>
  )
}

export default App