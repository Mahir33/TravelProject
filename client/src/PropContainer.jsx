import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const PropContainer = createContext();

export const PropProvider = ({ children }) => {
  const [username, setUsername] = useState(useParams.username);
  const [email, setEmail] = useState("");
  const [album, setAlbum] = useState();
  const [id, setId] = useState();
  const [location, setLocation] = useState("");
  const [picture, setPicture] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [registered, setRegistered] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [imageLocation, setImageLocation] = useState("");
  const [imagesData, setImagesData] = useState({});
  const [airlines, setAirlines] = useState(false);
  const [showList, setShowList] = useState("search-list-disappear");
  const [searchInput, setSearchInput] = useState("");
  const [usersFound, setUsersFound] = useState();

  return (
    <PropContainer.Provider
      value={{
        username,
        id,
        email,
        location,
        picture,
        album,
        message,
        registered,
        website,
        bio,
        buttonPopup,
        imageLocation,
        imagesData,
        airlines,
        showList,
        searchInput,
        usersFound,
        setUsername,
        setEmail,
        setId,
        setLocation,
        setPicture,
        setAlbum,
        setMessage,
        setRegistered,
        setWebsite,
        setBio,
        setButtonPopup,
        setImageLocation,
        setImagesData,
        setAirlines,
        setShowList,
        setSearchInput,
        setUsersFound,
      }}
    >
      {children}
    </PropContainer.Provider>
  );
};
