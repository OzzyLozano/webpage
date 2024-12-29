import React from 'react'
import logo from '../../img/yo.jpg'
// import infoIcon from '../../icons/info.svg'
// import projectsIcon from '../../icons/projects.svg'
// import contactIcon from '../../icons/contact.svg'

const Aside = ({changePage, routes}) => {

  return (
    <aside className='aside'>
      <img src={logo} alt='logo' className='myPhoto' />
      <div className='asideInfo card'>
        <h2 className='card-title'>Hola, soy Oziel Lozano.</h2>
        <p className='card-content'>
          Actualmente estudio Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Matamoros. Me gusta mucho crear páginas y aplicaciones web & móviles interactivas y animadas.
        </p>
      </div>
    </aside>
  )
}

export default Aside
