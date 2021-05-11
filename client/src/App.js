import React from "react";
import "../src/css/main.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MobileIndex from "./components/MobileIndex";
import MobileLogin from "./components/MobileLogin";
import MobileRegister from "./components/MobileRegister1";
import MobileHome from "./components/MobileHome";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MobileIndex} />
      <Route path="/login" component={MobileLogin} />
      <Route path="/register" component={MobileRegister} />
      <Route path="/home" component={MobileHome} />
    </Switch>
  </BrowserRouter>
);

function App() {
  return <>{routes}</>;
}

export default App;
