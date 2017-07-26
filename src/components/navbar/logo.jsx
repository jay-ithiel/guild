import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
    <Link to='/'>
        <img id='logo' className='btn' alt='Logo'
            src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1499813779/guild_logo_moqbzh.png'/>
    </Link>
);

export default Logo;
