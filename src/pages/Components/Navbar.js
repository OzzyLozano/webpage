import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const routes = [{
      title: 'Sobre mí'
    }, {
      title: 'Proyectos'
    }, {
      title: 'Contacto'
    }
  ]

  return (
    <nav>
      <p>Oziel Lozano</p>
      <ul className={`navContent ${open ? 'show' : 'hide'}`}>
        {routes.map((route) => {
          const { title } = route
          return (
            <li>
              {title}
            </li>
          )
        })}
      </ul>
      <button onClick={() => { setOpen(!open) }} className='burgerMenu'>
        <div className={open ? 'open': 'closed'}></div>
        <div className={open ? 'open' : 'closed'}></div>
      </button>
    </nav>
  )
}

export default Navbar
