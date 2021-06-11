import React, { useContext } from "react";
import { PropContainer } from "../../PropContainer";
import { FiSettings } from "react-icons/fi";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Input } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./profileSettingsSchema";
import PlacesAutocomplete from "react-places-autocomplete";

const ProfileSettings = () => {
  const { username, picture, location, email, setLocation } =
    useContext(PropContainer);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log("submit");
  };

  // const handleSelect = async (value) => {};

  return (
    <div>
      <div className="profile-container">
        <div className="back">
          <Link to={`/profile/${username}`}>
            <FaRegArrowAltCircleLeft />
          </Link>
        </div>
        <div className="search-input">
          <Input
            icon="search"
            placeholder="Search..."
            className="semantic-input"
          />
        </div>
        <div className="profile-settings-button">
          <Link to="/profile-settings">
            <FiSettings />
          </Link>
        </div>
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
        {/*Form Starts*/}
        <div className="profile-form-container">
          <form action="#">
            <div className="rowTab">
              <div className="labels">
                <label for="username">Username</label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  className="input-field"
                  placeholder={username}
                  {...register("username", {
                    maxLength: 20,
                  })}
                />
                <span className="errorStyleShow">
                  {errors.username?.message}
                </span>
              </div>
            </div>

            <div className="rowTab">
              <div className="labels">
                <p>E-mail</p>
              </div>
              <div className="rightTab">
                <p>{email}</p>
                <span className="errorStyleShow">{errors.email?.message}</span>
              </div>
            </div>

            <div className="rowTab">
              <div className="labels">
                <label for="profilepic">Location</label>
              </div>
              <div className="rightTab">
                <PlacesAutocomplete
                  value={location}
                  onChange={setLocation}
                  // onSelect={handleSelect}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div>
                      <input
                        {...getInputProps({ placeholder: "Type Location" })}
                        className="input-field"
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
                            >
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              </div>
            </div>

            <div className="rowTab">
              <div className="labels">
                <label for="profilepic">Update Profile Picture</label>
              </div>
              <div className="rightTab">
                <input
                  type="file"
                  className="input-field-upload"
                  {...register("profile-picture")}
                ></input>
              </div>
            </div>

            <div className="rowTab">
              <div className="labels">
                <label for="website">Website</label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  className="input-field"
                  {...register("website")}
                />
              </div>
            </div>

            <div className="rowTab">
              <div className="labels">
                <label for="bio">Bio</label>
              </div>
              <div className="rightTab">
                <textarea
                  className="input-field"
                  style={{ height: "50px", resize: "vertical" }}
                  {...register("bio")}
                />
              </div>
            </div>
            <div className="rowTab">
              <div className="labels">
                <label for="oldPassword">Old Password</label>
              </div>
              <div className="rightTab">
                <input
                  type="password"
                  className="input-field"
                  {...register("oldPassword", {
                    minLength: {
                      value: 8,
                    },
                  })}
                />
                <span className="errorStyleShow">
                  {errors.password?.message}
                </span>
              </div>
            </div>

            <div className="rowTab">
              <div className="labels">
                <label for="newPassword">New Password</label>
              </div>
              <div className="rightTab">
                <input
                  type="password"
                  className="input-field"
                  {...register("newPassword", {
                    minLength: {
                      value: 8,
                    },
                  })}
                />
                <span className="errorStyleShow">
                  {errors.password?.message}
                </span>
              </div>
            </div>

            <div className="rowTab">
              <div className="labels">
                <label for="confirm-new-password">Confirm New Password</label>
              </div>
              <div className="rightTab">
                <input
                  type="password"
                  className="input-field"
                  {...register("confirm_new_password")}
                />
                <span className="errorStyleShow">
                  {errors.confirm_password && "*Passwords should match!"}
                </span>
              </div>
            </div>
            <div className="rowTab">
              <div className="labels">
                <button
                  className="btn-next"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  next
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* form
        name
        email
        location
        update profile pic
        website
        Bio
        change Password*/}
      </div>
    </div>
  );
};

export default ProfileSettings;
