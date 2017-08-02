import React from 'react';
var Loader = require('react-loaders').Loader;

const LoadingScreen = () => (
  <ul id='blogs' className='border-box-sizing flex-center'>
    <Loader type="ball-scale-ripple" id='blogs-loader' active/>
  </ul>
);

export default LoadingScreen;
