import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
  'bootstrap-css-only/css/bootstrap.min.css'; import
  'mdbreact/dist/css/mdb.css';
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


