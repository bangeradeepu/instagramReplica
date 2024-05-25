import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SplashScreen from './splashScreen';
import './App.css';
import OtpSection from './OtpSection';

const App = () => {
  const serverAPI = import.meta.env.VITE_API_LINK;
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <Router>
      <Routes>
        {showSplash ? (
          <Route path="/" element={<SplashScreen serverAPI={serverAPI} />} />
        ) : (
          <Route path="/" element={<LoginPage serverAPI={serverAPI} />} />
        )}
                  <Route path="/otp" element={<OtpSection serverAPI={serverAPI} />} />

      </Routes>
    </Router>
  );
};

export default App;
