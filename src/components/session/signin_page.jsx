import React from 'react';
import SignIn from './signin';
import Session from './session';

const SignInPage = () => (
  <section className='signin-bg full-screen flex-center flex-column position-relative'>
    <div className='dark-veil'></div>
    <img id='signin-guild-logo' alt='Guild Logo' className='z-index--10'
      src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1499820814/guild_logo-green_pl6kk1.png'
    />

    <h3 id='signin-guild-head' className='white z-index--10'>guild</h3>
    <span id='signin-guild-span' className='white z-index--10'>decentralized blogging</span>

    <SignIn/>
    {/*
      <Session isSignIn={true}/>
      <Session isSignIn={false}/>
    */}
  </section>
);

export default SignInPage;
