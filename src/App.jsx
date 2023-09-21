import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Note from './components/Note'
import Preview from './components/Preview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className="outer-container">
        <Note/>

        <Preview/>
      </div>

    </div>
  )
}

export default App
