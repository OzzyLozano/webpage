import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({currentPage, changePage, routes}) => {

  return (
    <nav className='navbar'>
      <Link to='/' className='nav-title'>Oziel Lozano</Link>
      <div className={`nav-content`}>
        {Object.values(routes).map((route) => {
          const { id, title, linkPath } = route
          return (
            <Link key={id} to={linkPath} className='nav-element'>
              {title}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
