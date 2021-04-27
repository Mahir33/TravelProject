import React from 'react'
import '../src/css/main.css'
import MobileNavbar from './components/MobileNavbar.jsx'
import MobileLogin from './components/MobileLogin.jsx'
import MobileRegister1 from './components/MobileRegister1.jsx'
import MobileRegister2 from './components/MobileRegister2.jsx'
import MobileHome from './components/MobileHome'

function App() {
    return (
        <div>
            <MobileHome />
            <MobileLogin />
            <MobileRegister1 />
            <MobileNavbar />
            <MobileRegister2 />
            <MobileNavbar />
        </div>
    )
}

export default App
