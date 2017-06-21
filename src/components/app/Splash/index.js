import React from 'react'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'
const Link = Scroll.Link

import './splash.scss'

const Splash = ({ id }) => (<div className='SplashComponent'>
  <div id={'intro-splash-' + id}>
    <div id='intro-body'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            <h1>Mission Critical Support</h1>
            <p id='intro-text'>Providing end to end support for IT infrastructures since 2006.</p>
            <Link
              to='services'
              spy
              smooth
              offset={-90}
              duration={500}
              className='scrollto services-button btn btn-primary btn-transparent btn-lg'
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>)

Splash.propTypes = {
  id: PropTypes.number.isRequired
}

export default Splash
