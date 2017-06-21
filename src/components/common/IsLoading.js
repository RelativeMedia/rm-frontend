import React from 'react'

import './style.scss'
const IsLoadingComponent = () => (<div className='IsLoadingComponent'>
  <div className='container'>
    <p className='well text-center'>
      <i className='fa fa-circle-o-notch fa-spin fa-3x fa-fw'/>
    </p>
  </div>
</div>)
export default IsLoadingComponent
