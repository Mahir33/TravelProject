import React, {useContext, useEffect} from "react";
import "../src/css/main.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MobileIndex from "./components/MobileIndex/MobileIndex";
import MobileLogin from "./components/MobileLogin/MobileLogin";
import MobileRegister1 from "./components/MobileRegister/MobileRegister1";
import MobileHome from "./components/MobileHome/MobileHome";
import UserProfile from "./components/Profile/UserProfile";
import MobileSearch from "./components/MobileSearch/MobileSearch";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import Profile from "./components/Profile/Profile";
import {PropContainer} from "./PropContainer";

function App() {
  const {
    username,
    email,
    album,
    id,
    location,
    picture,
    website,
    bio,
    registered,
    setUsername,
    setEmail,
    setAlbum,
    setId,
    setLocation,
    setPicture,
    setWebsite,
    setBio,
    setRegistered,
    setFollowers,
    setFollowing,
  } = useContext(PropContainer);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
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
      setFollowers(user.followers);
      setFollowing(user.following);
    } else return;
  }, []);

  const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MobileIndex} />
        <Route path="/login" component={MobileLogin} />
        <Route path="/register" component={MobileRegister1} />
        <Route path="/home" component={MobileHome} />
        <Route path="/profile/:username" component={UserProfile} />
        <Route path="/user/:username" component={Profile} />
        <Route path="/search/:username" component={MobileSearch} />
        <Route path="/register-success" component={RegisterSuccess} />
        <Route path="/profile-settings" component={ProfileSettings} />
        <Route path="/navbar" component={MobileNavbar} />
      </Switch>
    </BrowserRouter>
  );
  return <>{routes}</>;
}

export default App;
