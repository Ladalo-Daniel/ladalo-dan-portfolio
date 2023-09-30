import React, { useContext, useState } from 'react'
import "./header.css"
import { AppContext } from '../../context/AppContext'

export default function Header() {
  const {toggleMenubar, menuClick} = useContext(AppContext)

  return (
    <header className='header'>
      <div className='logo__container'>
      <div className='menuIconContainer' onClick={toggleMenubar}>
      <i className={menuClick ? " fas fa-times menuIcon " : "fas fa-bars menuIcon "}></i>
      </div>
      <h1 className='logo'>L</h1>
      </div>
      <input type="text" placeholder='Search blog here...' />
      <div className='menuIconContainer' onClick={toggleMenubar}>
      <i className={menuClick ? " fa-solid fa-moon menuIcon " : "fa-solid fa-sun menuIcon "}></i>
      </div>
    </header>
  )
}
