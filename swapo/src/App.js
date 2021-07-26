import './App.css';
import React from 'react';
import { Link } from "react-router-dom";
import Login from './pages/login/Login'

function App() {
  return (
    <div>
      {/* // <div className="App"> */}
      {/* // <header className="App-header"> */}
      {/* <p>
        Edit <code>src/App.js</code> and save to reload.
      </p> */}
      {/* <Link to ='/messenger'>Messenger</Link> */}
      {/* <Link to ='/register'>register</Link> */}
      {/* <Link to ='/profile'>profile</Link> */}
      {/* <Link to ='/login'>login</Link> */}
      {/* <Link to ='/home'>home</Link> */}
      {/* <Link to ='/setting'>Setting</Link> */}
      <Login />

      {/* // </header> */}
    </div>
  );
}

export default App;
