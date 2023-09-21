import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Note from './components/Note'
import Preview from './components/Preview'

function App() {

  return (
    <div>
      <Header/>
      <div className="outer-container">
        <Note/>

      </div>

    </div>
  )
}

export default App
