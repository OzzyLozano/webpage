import React, { Component } from 'react'
import Welcome from './Sections/Welcome.js'
import About from './Sections/About.js'
import Projects from './Sections/Projects.js'
import Contact from './Sections/Contact.js'

class Home extends Component {
  render() {
    // const { currentPage, changePage, routes } = this.props

    return (
      <>
        <Welcome />
        <div className='home-content'>
          <section id='about' className={`about container`}>
            <About />
          </section>
          <section id='projects' className={`projects container`}>
            <Projects />
          </section>
          <section id='contact' className={`contact container`}>
            <Contact />
          </section>
        </div>
      </>
    )
  }
}

export default Home
