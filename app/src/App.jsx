import { useState } from 'react'
import Header from './components/Header'
import Top from './components/Top'
import './App.css'
import Center from './components/Center'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <Top></Top>
        <Center></Center>
      </div>
      
    </>
  )
}

export default App
