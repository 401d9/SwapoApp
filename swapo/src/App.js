import './App.css';
import React from 'react';
import BootstrapNavbar from './components/header'
import FacebookLogin from './components/facebook'

function App() {
  return (
    <>
    <BootstrapNavbar/>
      <FacebookLogin/>
    </>
  );
}

export default App;
