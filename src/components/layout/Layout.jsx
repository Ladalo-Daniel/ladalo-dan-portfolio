import React from 'react'
import "./layout.css"
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

export default function Layout() {
  return (
    <main>
      <Header />
       <div className='sidebar__layout'>
         <Sidebar />
         <Outlet />
       </div>
    </main>
  )
}
