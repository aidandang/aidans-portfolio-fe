import React from 'react'

// dependencies
import { Link, useLocation } from 'react-router-dom'
// data
import { NavbarData } from '../../state/navbar/navbar.data'

const NavbarMenu = () => {
  const location = useLocation()

  return <>
    {
      NavbarData.MENU_ITEMS.map(item => 
        <span key={item.id} className="mr-4">
          {
            item.link === location.pathname
            ? <span className="text-mute">{item.text}</span>
            : <Link to={item.link} className="nav-custom__link">{item.text}</Link>
          }
        </span> 
      )
    }
  </>
}

export default NavbarMenu
