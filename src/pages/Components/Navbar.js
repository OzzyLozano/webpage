import React from 'react'

const Navbar = ({routes}) => {

  return (
    <nav className='navbar'>
      <a href='/' className='nav-title'>Oziel Lozano</a>
      <div className={`nav-content`}>
        {Object.values(routes).map((route) => {
          const { title, linkPath } = route
          return (
            <a href={linkPath} className='nav-element'>{title}</a>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
