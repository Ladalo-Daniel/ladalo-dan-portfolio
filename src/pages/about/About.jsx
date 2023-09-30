import React, { useContext } from 'react'
import "./about.css"
import { AppContext } from '../../context/AppContext'

export default function About() {
  const {menuClick} = useContext(AppContext)
  return (
    <div className={ menuClick ? "menuclick__resize" : "about"}>
        ABOUT
    </div>
  )
}
