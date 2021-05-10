import React from 'react'
import '../src/css/main.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MobilHome from './components/MobileHome'
import MobilLogin from './components/MobileLogin'
import MobilRegister from './components/MobileRegister1'

const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MobilHome} />
        <Route path="/login" component={MobilLogin} />
        <Route path="/register" component={MobilRegister} />
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
