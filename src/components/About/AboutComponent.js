import React from 'react'

import log from 'middleware/logger'

const AboutComponent = (props) => (<div className='AboutComponent'>
  <div className='container'>
    <div className='row'>
      <h1>About</h1>
    </div>
    <div className='row'>
      <div className='about-body'>
        <div className='col-xs-12 col-sm-3'>
          <img src='images/portrait_260x400.jpg' className='img-responsive' />
        </div>
        <div className='col-xs-12 col-sm-9'>
          <p>Hey there, my name is <strong>Mike DeVita</strong>. I am an IT professional that has been in the industry since 2006, I develop custom websites and web applications for businesses.
          I  am also a systems administrator for linux and windows systems. I live in Arizona have been here all my life, I've always had a passion for technology and programming.
          I started web development in 2006 as a freelance developer writing custom PHP applications and customizing wordpress websites. In 2008 I opened Relative Media, the professional
          front to my development and systems administration services.</p>

          <p>I love hacking away at a command prompt solving problems and learning new things. I have managed single full-stack websites all the way up to small datacenters and small business infrastructures.</p>
        </div>
      </div>
    </div>
  </div>
</div>)

AboutComponent.propTypes = {
}

export default AboutComponent
