import React from "react";
import "../src/css/main.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MobilIndex from "./components/MobileIndex";
import MobilLogin from "./components/MobileLogin";
import MobilRegister1 from "./components/MobileRegister1";
import MobileHome from "./components/MobileHome";
import Profile from "./components/profile/Profile";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MobilIndex} />
      <Route path="/login" component={MobilLogin} />
      <Route path="/register" component={MobilRegister1} />
      <Route path="/home" component={MobileHome} />
      <Route
        path="/profile"
        component={() => <Profile username={"postman_test1"} />}
      />
    </Switch>
  </BrowserRouter>
);

function App() {
  return <>{routes}</>;
}

export default App;
