import React from 'react'
import '../src/css/main.css'
import MobileNavbar from './components/MobileNavbar.jsx'
import MobileLogin from './components/MobileLogin.jsx'
import MobileRegister1 from './components/MobileRegister1.jsx'
import MobileRegister2 from './components/MobileRegister2.jsx';

function App() {
    return (
        <div>
            <MobileLogin />
            <MobileNavbar />
            <MobileRegister1 />
            <MobileRegister2 />
        </div>
    )
}

export default App
