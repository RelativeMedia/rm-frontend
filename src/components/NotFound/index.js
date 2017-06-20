import React  from 'react'
import { Link } from 'react-router'

import './style.scss'
const NotFoundComponent = () => (<div className='NotFoundComponent'>
  <div className='container'>
    <div className='col-xs-12 text-center well'>
      <h4>404 Page Not Found</h4>
      <Link to='/'>Go Home</Link>
    </div>
  </div>
</div>)
export default NotFoundComponent
