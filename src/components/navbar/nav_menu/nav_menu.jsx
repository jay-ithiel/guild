import React from 'react';
import { isUserSignedIn, isSignInPending } from 'blockstack';
import UserNavMenu from './user_nav_menu';
import GuestNavMenu from './guest_nav_menu';

const NavMenu = () => (
  isUserSignedIn() || isSignInPending() ? <UserNavMenu /> : <GuestNavMenu />
);

export default NavMenu;
