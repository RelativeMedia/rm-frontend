import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import * as log from 'loglevel';

import config from 'config';
import Header from 'components/Header';
import './BaseLayout.scss';

class BaseLayout extends Component {
  static propTypes = {}
  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  componentDidMount () {
    log.info('componentDidMount');
  }

  componentDidUpdate () {
    log.info('componentDidUpdate');
  }

  render() {
    const {
      children
    } = this.props

    let buildTitle = config.APP_TITLE

    return (<DocumentTitle title={buildTitle}>
      <div className='BaseLayout'>
        <Header />
        {children}
      </div>
    </DocumentTitle>)
  }
}

export default BaseLayout
