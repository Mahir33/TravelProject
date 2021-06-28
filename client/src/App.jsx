import React, { useContext, useEffect } from "react";
import "../src/css/main.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MobileIndex from "./components/MobileIndex/MobileIndex";
import MobileLogin from "./components/MobileLogin/MobileLogin";
import MobileRegister1 from "./components/MobileRegister/MobileRegister1";
import MobileHome from "./components/MobileHome/MobileHome";
import Profile from "./components/Profile/Profile";
import MobileSearch from "./components/MobileSearch/MobileSearch";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import { PropContainer } from "./PropContainer";

function App() {
  const {
    setUsername,
    setEmail,
    setAlbum,
    setId,
    setLocation,
    setPicture,
    setWebsite,
    setBio,
    setRegistered,
  } = useContext(PropContainer);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
      setAlbum(user.album);
      setId(user._id);
      setLocation(user.location);
      setPicture(user.profilePicture);
      setWebsite(user.website);
      setBio(user.bio);
      setRegistered(user.registered);
    }
  }, []);

  const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MobileIndex} />
        <Route path="/login">
          <MobileLogin />
        </Route>
        <Route path="/register">
          <MobileRegister1 />
        </Route>
        <Route path="/home">
          <MobileHome />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/search/:username" component={MobileSearch} />
        <Route path="/register-success" component={RegisterSuccess} />
        <Route path="/profile-settings" component={ProfileSettings} />
        <Route path="/navbar">
          <MobileNavbar />
        </Route>
      </Switch>
    </BrowserRouter>
  );
  return <>{routes}</>;
}

export default App;
