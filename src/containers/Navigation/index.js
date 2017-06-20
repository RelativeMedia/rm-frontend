import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Navbar, MenuItem, Nav, NavItem } from 'react-bootstrap'

import NavigationItem from './NavItem'

export class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      route: 'home'
    }
  }

  static contextTypes = {
    router: PropTypes.any
  }

  _setActive = (to) => {
    this.setState({ route: to })
  }

  render () {
    const { logo, project, isLoading, hasResults } = this.props

    let menuItems = [
      { id: 'home', path: '/', name: 'Home' },
      { id: 'about', path: '/about', name: 'About' },
      { id: 'services', path: '/services', name: 'Services' },
      { id: 'contact', path: '/contact', name: 'Contact' },
      { id: 'blog', path: 'https://blog.relative.media', name: 'Blog', external: true }
    ]

    if (!isLoading && hasResults) {
      menuItems.push({ id: 'projects', path: '/projects', name: 'Projects' })
    }

    const _menuItems = menuItems.map((item, index) => {
      if (item.external) {
        return (<NavItem key={index} href={item.path}>{item.name}</NavItem>)
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
        <Navbar.Toggle children={<i className="fa fa-bars" />} />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>{_menuItems}</Nav>
      </Navbar.Collapse>
    </Navbar>)
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading['PROJECT'],
  hasResults: state.hasResults['PROJECT'],
  auth: state.auth,
  project: state.project
})
export default connect(mapStateToProps)(Navigation)
