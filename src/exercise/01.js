// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(previousState, dispatcherArg) {
  const {type, step} = dispatcherArg
  if (type === 'INCREMENT') {
    return {...previousState, count: previousState.count + step}
  }

  throw new Error(`Unsupported action type: ${type}`)
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
