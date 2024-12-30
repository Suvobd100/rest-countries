import { useState } from 'react'
import './App.css'
import Countryes from './components/Countryes/Countryes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Countryes></Countryes>
         
    </>
  )
}

export default App
