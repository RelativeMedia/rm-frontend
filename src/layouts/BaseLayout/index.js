import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title'
import * as log from 'loglevel'

import config from 'config'
import Components from 'components/app'
import './BaseLayout.scss'

class BaseLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  render() {
    const {
      children
    } = this.props

    let buildTitle = config.APP_TITLE

    return (<DocumentTitle title={buildTitle}>
      <div className='BaseLayout'>
        <Components.Header />
        {children}
        <footer>
          <div className='container'>
            <div className='col-xs-12 col-md-6'>
              <p id='copyright'>Copyright &copy; 2017 Relative Media | All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </DocumentTitle>)
  }
}

export default BaseLayout
