import React from 'react';
import SignIn from './signin';

const SignInPage = () => (
    <section className='signin-bg full-screen flex-center flex-column'>
        <img id='signin-guild-logo' alt='Guild Logo'
            src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1499820814/guild_logo-green_pl6kk1.png' />

        <h3 id='signin-guild-head'>guild</h3>
        <span id='signin-guild-span'>decentralized blogging</span>

        <SignIn />
    </section>
);

export default SignInPage;
