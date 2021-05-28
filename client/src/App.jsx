import React, { useState } from "react";
import "../src/css/main.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MobileIndex from "./components/MobileIndex/MobileIndex";
import MobileLogin from "./components/MobileLogin/MobileLogin";
import MobileRegister1 from "./components/MobileRegister/MobileRegister1";
import MobileHome from "./components/MobileHome/MobileHome";
import Profile from "./components/profile/Profile";
import MobileSearch from "./components/MobileSearch/MobileSearch";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";

function App() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MobileIndex} />
        <Route
          path="/login"
          component={MobileLogin}
          username={username}
          id={id}
          email={email}
        />
        <Route
          path="/register"
          component={MobileRegister1}
          username={username}
          id={id}
          email={email}
        />
        <Route path="/home" component={MobileHome} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/search/:username" component={MobileSearch} />
        <Route path="/register-success" component={RegisterSuccess} />
      </Switch>
    </BrowserRouter>
  );
  return <>{routes}</>;
}

export default App;
