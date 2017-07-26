import React from 'react';
import { withRouter } from 'react-router';

import Logo from './logo';
import NavSearch from '../search/nav_search';
import NavMenu from './nav_menu/nav_menu';

const Navbar = props => (
  <nav id='navbar'>
    <Logo />
    <div id='navdiv' className='flex justify-between align-center'>
        {/* <NavSearch /> */}
        <NavMenu />
    </div>
  </nav>
);

export default withRouter(Navbar);
