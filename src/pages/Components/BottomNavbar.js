import React from "react"
import { Link } from "react-router-dom"

const BottomNavbar = ({currentPage, changePage, routes}) => {
  return (
    <div className='bottom-navbar'>
        {Object.values(routes).map((route) => {
          const { id, title, icon, linkPath } = route
          return (
            <Link key={id} to={linkPath} className='bottom-nav-element'>
              <img src={icon} alt={`icon${id}`} className='bottom-nav-icon' />
              {title}
            </Link>
          )
        })}
    </div>
  )
}

export default BottomNavbar
