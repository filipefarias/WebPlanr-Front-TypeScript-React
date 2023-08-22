import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'

function App() {
  const [asideView, setView] = useState(false)
  const handleState = () => {setView(!asideView)}

  return (
    <>
      <Header />
      <Aside state={asideView} setState={handleState} />
    </>
  )
}

export default App
