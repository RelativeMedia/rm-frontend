import React from 'react'

const ServicesComponent = (props) => (<div className='ServicesComponent'>
  <div className='container'>
    <div className='row'>
      <h1>Services</h1>
    </div>
    <div className='row'>
      <div className='services-body'>
        <div className='row'>
          <div className='col-lg-4 service-body'>
            <i className='fa fa-terminal fa-5x'/>
            <h3>System Administration</h3>
            <p>I provide end-to-end administration of servers, both linux and windows systems. Anything from maintaining systems to deploying new systems.</p>
          </div>
          <div className='col-lg-4 service-body'>
            <i className='fa fa-paint-brush fa-5x'/>
            <h3>Web Design</h3>
            <p>Need a new website or increase the performance of your existing site? I provide both services using the latest standards.</p>
          </div>
          <div className='col-lg-4 service-body'>
            <i className='fa fa-wrench fa-5x'/>
            <h3>Computer Repair</h3>
            <p>I offer on site computer repair services, both server and desktop often times with 24 hour turn-around.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <p>Not everything I offer is listed on here, if you are looking for any type of IT support that may not be listed feel free to reach out to me so we can get the problem taken care of. I am on call 24/7, and can provide both on-site and off-site support services.</p>
          </div>
          <div className='col-md-6 col-lg-3'>
            <h4>Systems Administration</h4>
            <ul>
              <li>Network Management</li>
              <li>Linux Administration</li>
              <li>Windows Administration</li>
              <li>Hardware Build-out</li>
              <li>Infrastructure Planning</li>
            </ul>
          </div>
          <div className='col-md-6 col-lg-3'>
            <h4>Web Development</h4>
            <ul>
              <li>Backend Web Development</li>
              <li>Frontend Web Development</li>
              <li>Wordpress Installation</li>
              <li>Full Stack Development</li>
              <li>Server Configuration</li>
              <li>End to End Web Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>)

export default ServicesComponent
