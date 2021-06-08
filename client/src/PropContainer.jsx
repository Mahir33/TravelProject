import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const PropContainer = createContext();

export const PropProvider = ({ children }) => {
  const [username, setUsername] = useState(useParams.username);
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const [location, setLocation] = useState("");
  const [picture, setPicture] = useState("");
  const [message, setMessage] = useState("");
  const [registered, setRegistered] = useState(false);

  return (
    <PropContainer.Provider
      value={{
        username,
        id,
        email,
        location,
        picture,
        message,
        registered,
        setUsername,
        setEmail,
        setId,
        setLocation,
        setPicture,
        setMessage,
        setRegistered,
      }}
    >
      {children}
    </PropContainer.Provider>
  );
};
