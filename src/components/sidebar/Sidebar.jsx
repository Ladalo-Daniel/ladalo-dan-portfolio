import React, { useContext } from 'react'
import "./sidebar.css"
import { AppContext } from '../../context/AppContext'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const {menuClick} = useContext(AppContext)
  return (
    <div className="sidebar__wrapper">
    <div className={menuClick ? 'sidebar__close' : 'sidebar'}>
      <ul className="sidebar__list__container">
        <NavLink to="/">
        <li className="sidebar__list__item">
          <i className='fas fa-home'></i>
          <p>Home</p>
        </li>
        </NavLink>
        <NavLink to="/about">
        <li className="sidebar__list__item">
        <i className="fa-brands fa-adn"></i>
        <p>About</p>
        </li>
        </NavLink>
        <li className="sidebar__list__item">
        <i className="fa-brands fa-product-hunt"></i>
        <p>Projects</p>
        </li>
        <li className="sidebar__list__item">
        <i className="fa-brands fa-contao"></i>
        <p>Blog</p>
        </li>
      </ul>
      <ul className="sidebar__social__icons__container">
        <li className="icon">
        <i className="fa-brands fa-square-twitter"></i>
        </li>
        <li className="icon">
        <i className="fa-brands fa-square-github"></i>
        </li>
        <li className="icon">
        <i className="fa-brands fa-square-whatsapp"></i>
        </li>
        <li className="icon">
          <i className='fas fa-envelope'></i>
        </li>
      </ul>
    </div>
    </div>
  )
}
