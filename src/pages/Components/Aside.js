import React from 'react'
import logo from '../../img/yo.jpg'
import infoIcon from '../../icons/info.svg'
import proyectsIcon from '../../icons/projects.svg'
import contactIcon from '../../icons/contact.svg'

const Aside = () => {
  return (
    <aside className='aside'>
      <div className='navMenu'>
        <img src={logo} alt='logo' className='myPhoto' />
        <ul className='options'>
          <li className='icon1'>
            <img src={infoIcon} alt='info' className='icon' />
          </li>
          <li className='icon2'>
            <img src={proyectsIcon} alt="proyects" className="icon" />
          </li>
          <li className='icon3'>
            <img src={contactIcon} alt="contact" className="icon" />
          </li>
        </ul>
      </div>
      <div className='asideInfo card'>
        <h2>Hola, soy Oziel Lozano.</h2>
        <p>
          Actualmente estudio Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Matamoros. Me gusta mucho crear páginas y aplicaciones web & móviles interactivas y animadas.
        </p>
      </div>
    </aside>
  )
}

export default Aside
