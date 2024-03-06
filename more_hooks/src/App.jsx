import { useState } from 'react'
import './App.css'
import UseReducer from './components/UseReducer'
import TodoApp from './components/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoApp />
    </>
  )
}

export default App