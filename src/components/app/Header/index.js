import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Header.scss'
import LogoLight from 'static/img/logo-light.png'
import LogoDark from 'static/img/logo-dark.png'
import Components from 'components/app'

class Header extends Component {
  static propTypes = {}
  static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = {
      headerHeight: 100,
      isScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if(document.body.scrollTop >= (window.innerHeight - this.state.headerHeight)) {
      this.setState({
        isScrolled: true
      })
    } else {
      this.setState({
        isScrolled: false
      })
    }
  }

  render() {
    const classes = classNames('HeaderComponent', {
      'scrolled': this.state.isScrolled
    })
    const logo = (this.state.isScrolled) ? LogoDark : LogoLight
    return (<div id='HeaderComponent' className={classes}>
      <Components.Navigation isScrolled={this.state.isScrolled} logo={logo} />
    </div>)
  }
}
export default Header
