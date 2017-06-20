import React from 'react';
import classnames from 'classnames';

import './Header.scss';
import Logo from 'static/logo.png';
import Navigation from 'containers/Navigation';

export const Header = (props) => (<div id='HeaderComponent' className={classnames('HeaderComponent', { 'scrolled': (document.body.scrollTop > 80) })}>
  <Navigation logo={Logo} />
</div>);

export default Header;
