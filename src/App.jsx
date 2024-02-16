import { useState } from 'react'
import Header from './components/Header'
import Top from './components/Top'
import './App.css'
import Center from './components/Center'
import Bottom from './components/Bottom'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <Top></Top>
        <Center></Center>
        <Bottom/>
        <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
