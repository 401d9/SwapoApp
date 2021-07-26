import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
