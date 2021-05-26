import React from "react";
import "../src/css/main.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MobileIndex from "./components/MobileIndex/MobileIndex";
import MobileLogin from "./components/MobileLogin/MobileLogin";
import MobileRegister1 from "./components/MobileRegister/MobileRegister1";
import MobileHome from "./components/MobileHome/MobileHome";
import Profile from "./components/profile/Profile";
import MobileSearch from "./components/MobileSearch/MobileSearch";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MobileIndex} />
      <Route path="/login" component={MobileLogin} />
      <Route path="/register" component={MobileRegister1} />
      <Route path="/home" component={MobileHome} />
      <Route
        path="/profile"
        component={() => <Profile username={"postman_test1"} />}
      />
      <Route path="/search" component={MobileSearch} />
      <Route path="/register-success" component={RegisterSuccess} />
    </Switch>
  </BrowserRouter>
);

function App() {
  return <>{routes}</>;
}

export default App;
