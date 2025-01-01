import React from 'react'
import { ReactComponent as MyAvatar } from '../../img/me.svg'

const Welcome = () => {

  return (
    <section id='welcome' className='welcome container'>
      <MyAvatar className='my-avatar' />
      
      <div className='introduction card'>
        <h2 className='card-title'>Hola, soy Oziel Lozano.</h2>
        <p className='card-content'>
          Actualmente estudio Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Matamoros. Me encanta el desarrollo de software y la digitalización de procesos.
        </p>
      </div>
    </section>
  )
}

export default Welcome
