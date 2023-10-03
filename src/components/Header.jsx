import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
   <header>

    <div className="img">

        <img src={logo} alt="" />
    </div>
    <h3>My Notes</h3>
   </header>
  )
}
