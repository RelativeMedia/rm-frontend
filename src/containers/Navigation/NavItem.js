import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Scroll from 'react-scroll'
const Link = Scroll.Link

import './navigation.scss'
export default class NavigationItem extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired
  }

  _handleClick = (to) => {
    this.props.setActive(to)
  }

  render () {
    const { route, active } = this.props
    const classnames = classNames({ 'active': active })
    return (<li className={classnames}>
      <Link
        to={route.id}
        spy
        smooth
        offset={-90}
        onSetActive={this._handleClick}
        duration={500}
      >
        {route.name}
      </Link>
    </li>)
  }
}
