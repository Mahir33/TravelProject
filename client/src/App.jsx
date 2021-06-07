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
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";

function App() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState();

  const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MobileIndex} />
        <Route path="/login">
          <MobileLogin
            username={username}
            setUsername={setUsername}
            id={id}
            email={email}
          />
        </Route>
        <Route path="/register">
          <MobileRegister1
            username={username}
            setUsername={setUsername}
            id={id}
            email={email}
          />
        </Route>
        <Route path="/home">
          <MobileHome username={username} setUsername={setUsername} />
        </Route>
        <Route path="/profile/:username">
          <Profile username={username} setUsername={setUsername} />
        </Route>
        <Route path="/search/:username" component={MobileSearch} />
        <Route path="/register-success" component={RegisterSuccess} />
        <Route path="/navbar">
          <MobileNavbar id={id} email={email} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
  return <>{routes}</>;
}

export default App;
