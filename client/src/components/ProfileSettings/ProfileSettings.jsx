import React, { useContext } from "react";
import { PropContainer } from "../../PropContainer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./profileSettingsSchema";
import PlacesAutocomplete from "react-places-autocomplete";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const ProfileSettings = () => {
  const { username, picture, location, email, website, bio, setLocation } =
    useContext(PropContainer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log({ ...data, location });

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
      type: "address",
      placeholder: location,
      className: "input-field",
    },
    {
      label: "Profile Picture",
      name: "picture",
      type: "file",
      placeholder: "",
      className: "",
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

  const displayInputs = (name, type, placeholder, className) => {
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
                    <div {...getSuggestionItemProps(suggestion, { style })}>
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
      <ProfileNavbar />

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
        <div className="profile-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            {inputsMap.map(({ label, name, type, placeholder, className }) => (
              <div className="rowTab" key={name}>
                <div className="labels">
                  <label htmlFor={name}>{label}</label>
                </div>

                {displayInputs(name, type, placeholder, className)}
                {/* <div className='rightTab'>
                <input
                  id={name}
                  type={type}
                  className={className}
                  placeholder={placeholder}
                  {...register(name)}
                />
                <span className='errorStyleShow'>
                  {displayError(errors, name)}
                </span>
              </div> */}
              </div>
            ))}
            <div className="rowTab">
              <div className="labels">
                <button className="btn-next" type="submit">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default ProfileSettings;
