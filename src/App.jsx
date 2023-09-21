import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Note from './components/Note'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className="container">
        <Note/>
      </div>
    </div>
  )
}

export default App
