import React, {useState, useContext} from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import {PropContainer} from "../../PropContainer";
import {FaWindowClose} from "react-icons/fa";
import axios from "axios";
import {v4 as uuidv4} from "uuid";

const PictureUploadPopup2 = () => {
  const {buttonPopup, setButtonPopup} = useContext(PropContainer);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState();

  const handleFile = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var form_data = new FormData();
    form_data.append("location", location);
    form_data.append("description", description);
    form_data.append("picture", picture, picture.name);
    var userToUpdate = JSON.parse(sessionStorage.getItem("user"));
    await axios
      .put("http://localhost:3001/post/create", form_data, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("token"),
          "user-id": sessionStorage.getItem("id"),
        },
      })
      .then((res) => {
        userToUpdate.album.push(res.data);
        sessionStorage.setItem("user", JSON.stringify(userToUpdate));
      })
      .catch((err) => console.log(err));
  };

  return buttonPopup ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="close">
          <FaWindowClose onClick={() => setButtonPopup(false)} />
        </div>

        <div className="upload-form">
          <form>
            <div className="rowTab">
              <div className="labels">
                <label htmlFor="picture">Picture</label>
              </div>
              <div className="rightTab">
                <input
                  name="picture"
                  id="picture"
                  type="file"
                  className="input-field"
                  placeholder=""
                  onChange={handleFile}
                />
              </div>
            </div>

            <div className="rowTab">
              <div className="labels">
                <label htmlFor="picture">Location</label>
              </div>
              <PlacesAutocomplete value={location} onChange={setLocation}>
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div className="rightTab">
                    <input
                      {...getInputProps({
                        name: "location",
                        placeholder: "Enter the location of the picture",
                        type: "text",
                        className: "input-field",
                      })}
                    />
                    <div>
                      {loading ? <div>...Loading</div> : null}
                      {suggestions.map((suggestion) => {
                        const style = suggestion.active
                          ? {backgroundColor: "#41b6e6", cursor: "pointer"}
                          : {backgroundColor: "#fff", cursor: "pointer"};

                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {style})}
                            key={uuidv4()}>
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>

            <div className="rowTab">
              <div className="labels">
                <label htmlFor="description">Description</label>
              </div>
              <div className="rightTab">
                <input
                  name="description"
                  id="description"
                  type="text"
                  className="input-field"
                  placeholder="Enter a description for the picture"
                  onChange={handleDescription}
                />
              </div>
            </div>
            <div className="rowTab">
              <div className="labels">
                <button
                  className="btn-upload"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}>
                  Upload Picture
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default PictureUploadPopup2;
