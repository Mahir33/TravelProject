import React from 'react'
import '../src/css/main.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MobilIndex from './components/MobileIndex'
import MobilLogin from './components/MobileLogin'
import MobilRegister from './components/MobileRegister1'
import MobileHome from './components/MobileHome'

const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MobilIndex} />
        <Route path="/login" component={MobilLogin} />
        <Route path="/register" component={MobilRegister} />
        <Route path="/home" compoennt={MobileHome} />
      </Switch>
    </BrowserRouter>
  )

function App() {
    return (
        <>
        {routes}
        </>
    )
}

export default App
