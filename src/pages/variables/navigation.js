import React, { Component } from 'react'
import Aside from '../Components/Aside'

class Home extends Component {
  render() {
    const { currentPage, changePage } = this.props

    return (
      <>
        <Aside changePage={changePage} />
        {currentPage !== '' ? <div className='home-container'>
          currrent page is {currentPage}
        </div> : <div className='home-container hide'>
        </div>}
      </>
    )
  }
}

export default Home
