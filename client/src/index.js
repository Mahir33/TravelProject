import React from 'react';
import ReactDOM from 'react-dom';
import MobileNavbar from './components/_mobileNavbar.jsx'
import MobileLogin from './components/_mobileLogin.jsx'
import MobileRegister1 from './components/_mobileRegister1.jsx'
import MobileRegister2 from './components/_mobileRegister2.jsx';

ReactDOM.render(
  <React.StrictMode>
    <MobileLogin />
    <MobileNavbar />
    <MobileRegister1 />
    <MobileRegister2 />
  </React.StrictMode>,
  document.getElementById('root')
);
