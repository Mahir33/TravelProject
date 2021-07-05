import React, { useContext, useState } from "react";
import { PropContainer } from "../../PropContainer";
import { Redirect } from "react-router-dom";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./profileSettingsSchema";
import PlacesAutocomplete from "react-places-autocomplete";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const ProfileSettings = () => {
  const {
    username,
    picture,
    location,
    email,
    website,
    bio,
    setUsername,
    setPicture,
    setLocation,
    setEmail,
    setWebsite,
    setBio,
  } = useContext(PropContainer);

  const [updated, setUpdated] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const updateState = async (res) => {
    sessionStorage.setItem("user", JSON.stringify(res.data));
    setUsername(res.data.username);
    setPicture(res.data.profilePicture);
    setLocation(res.data.location);
    setEmail(res.data.email);
    setWebsite(res.data.website);
    setBio(res.data.bio);
    setUpdated(true);
  };

  const onSubmit = async (data) => {
    var form_data = new FormData();
    for (var key in data) {
      if (key === "picture") {
        if (data.picture[0])
          form_data.append(key, data.picture[0], data.picture[0].name);
      } else form_data.append(key, data[key]);
    }
    form_data.append("location", location);
    await axios
      .put("http://localhost:3001/user/update", form_data, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("token"),
          "user-id": sessionStorage.getItem("id"),
        },
      })
      .then((res) => updateState(res))
      .catch((err) => console.log(err));
  };

  const inputsMap = [
    {
      label: "Username",
      name: "username",
      type: "text",
      placeholder: username,
      className: "input-field",
    },
    {
      label: "E-mail",
      name: "email",
      type: "email",
      placeholder: email,
      className: "input-field",
    },
    {
      label: "Location",
      name: "location",
      type: "text",
      placeholder: location,
      className: "input-field",
    },
    {
      label: "Profile Picture",
      name: "picture",
      type: "file",
      placeholder: "",
      className: "",
      ref: picture,
    },
    {
      label: "Website",
      name: "website",
      type: "text",
      placeholder: website,
      className: "input-field",
    },
    {
      label: "Bio",
      name: "bio",
      type: "text",
      placeholder: bio,
      className: "input-field",
    },
    {
      label: "Old Password",
      name: "oldPassword",
      type: "password",
      placeholder: "",
      className: "input-field",
    },
    {
      label: "New Password",
      name: "newPassword",
      type: "password",
      placeholder: "",
      className: "input-field",
    },
    {
      label: "Confirm New Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "",
      className: "input-field",
    },
  ];

  const displayInputs = (name, type, placeholder, className, ref) => {
    if (name === "location") {
      return (
        <PlacesAutocomplete value={location} onChange={setLocation}>
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className="rightTab">
              <input
                name={name}
                id={name}
                type={type}
                className={className}
                ref={ref}
                placeholder={placeholder}
                {...getInputProps(name)}
                // {...register(name)}
              />
              <div>
                {loading ? <div>...Loading</div> : null}
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? { backgroundColor: "#41b6e6", cursor: "pointer" }
                    : { backgroundColor: "#fff", cursor: "pointer" };

                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, { style })}
                      key={uuidv4()}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      );
    } else
      return (
        <div className="rightTab">
          <input
            key={uuidv4()}
            name={name}
            id={name}
            type={type}
            className={className}
            placeholder={placeholder}
            {...register(name)}
          />
          <span className="errorStyleShow">{displayError(errors, name)}</span>
        </div>
      );
  };

  const displayError = (errors, name) => {
    switch (name) {
      case "username":
        return errors.username?.message;
      case "email":
        return errors.email?.message;
      case "location":
        return errors.location?.message;
      case "picture":
        return errors.location?.message;
      case "website":
        return errors.website?.message;
      case "bio":
        return errors.bio?.message;
      case "oldPassword":
        return errors.oldPassword?.message;
      case "newPassword":
        return errors.newPassword?.message;
      case "confirmPassword":
        return errors.confirmPassword?.message;

      default:
        return "";
    }
  };

  return (
    <div>
      <div className="profile-container">
        <ProfileNavbar />
      </div>

      <div className="profile-display">
        <div className="profile-picture-container">
          <div
            className="profile-image"
            style={{
              backgroundImage: `url(${picture})`,
            }}
          ></div>
        </div>
        <h2>{username}</h2>
        <h6>{location}</h6>
      </div>

      <div className="profile-form-container">
        <form
          className="profile-form"
          onSubmit={handleSubmit(onSubmit)}
          method="put"
          encType="multipart/form-data"
        >
          {inputsMap.map(
            ({ label, name, type, placeholder, className, ref }) => (
              <div className="rowTab" key={name}>
                <div className="labels">
                  <label htmlFor={name}>{label}</label>
                </div>

                {displayInputs(name, type, placeholder, className, ref)}
              </div>
            )
          )}
          <div className="rowTab">
            <div className="labels">
              <button className="btn-next" type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
      {updated ? <Redirect to={`/home`} /> : null}
      <MobileNavbar />
    </div>
  );
};

export default ProfileSettings;
