import React from 'react';
import './App.css';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src="./instaLogo.webp" alt="Logo" className="splash-logo" />
      <div className='bottomDataSpalsh flex space-evenly'>
      <div className='text-center'>
        <div className='f1 grey'>from</div>
        <img src="./metaLogo.png" className='metaLogo' alt="" />
      </div>
    </div>
    </div>
  );
}

export default SplashScreen;
