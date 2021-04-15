import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/main.css'
import MobileNavbar from './components/MobileNavbar.jsx'
import MobileLogin from './components/MobileLogin.jsx'
import MobileRegister1 from './components/MobileRegister1.jsx'
import MobileRegister2 from './components/MobileRegister2.jsx';

ReactDOM.render(
  <React.StrictMode>
    <MobileLogin />
    <MobileNavbar />
    <MobileRegister1 />
    <MobileRegister2 />
  </React.StrictMode>,
  document.getElementById('root')
);
