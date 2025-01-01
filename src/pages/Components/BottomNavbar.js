import React from "react"

const BottomNavbar = ({routes}) => {
  return (
    <div className='bottom-navbar'>
        {Object.values(routes).map((route) => {
          const { id, title, icon, linkPath } = route
          return (
            <a key={id} href={linkPath} className='bottom-nav-element'>
              <img src={icon} alt={`icon${id}`} className='bottom-nav-icon' />
              <p>{title}</p>
            </a>
          )
        })}
    </div>
  )
}

export default BottomNavbar
