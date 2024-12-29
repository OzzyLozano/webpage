import React, { Component } from 'react'
import Aside from './Components/Aside.js'
import About from './Sections/About.js'
import Projects from './Sections/Projects.js'
import Contact from './Sections/Contact.js'

class Home extends Component {
  render() {
    const { currentPage, changePage, routes } = this.props

    return (
      <>
        <Aside changePage={changePage} routes={routes} />
        <div className='home-content'>
          <div className={`about container ${currentPage === routes.about.id ? '' : 'hide'}`}>
            <About />
          </div>
          <div className={`projects container ${currentPage === routes.projects.id ? '' : 'hide'}`}>
            <Projects />
          </div>
          <div className={`contact container ${currentPage === routes.contact.id ? '' : 'hide'}`}>
            <Contact />
          </div>
        </div>
      </>
    )
  }
}

export default Home
