import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Navbar, MenuItem, Nav, NavItem } from 'react-bootstrap'

import NavigationItem from './NavItem'

export default class Navigation extends React.Component {
  static propTypes = {
    logo: PropTypes.string.isRequired
  }

  static defaultProps = {}

  constructor (props) {
    super(props)
    this.state = {
      route: 'home'
    }
  }

  _setActive = (to) => {
    this.setState({ route: to })
  }

  render () {
    const { logo } = this.props

    let menuItems = [
      { id: 'home', path: '/', name: 'Home' },
      { id: 'about', path: '/about', name: 'About' },
      { id: 'services', path: '/services', name: 'Services' },
      { id: 'contact', path: '/contact', name: 'Contact' }
    ]

    const _menuItems = menuItems.map((item, index) => {
      if (item.external) {
        return (<NavItem key={index} href={item.path} target={item.target || '_blank'}>{item.name}</NavItem>)
      } else {
        return (<NavigationItem
          route={item}
          key={index}
          setActive={this._setActive}
          active={(this.state.route === item.id)}
        />)
      }
    })

    return (<Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <img className='logo' src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle children={<i className='fa fa-bars' />} />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>{_menuItems}</Nav>
      </Navbar.Collapse>
    </Navbar>)
  }
}
