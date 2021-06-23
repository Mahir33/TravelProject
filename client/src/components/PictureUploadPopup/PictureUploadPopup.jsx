import PlacesAutocomplete from "react-places-autocomplete";
import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { PropContainer } from "../../PropContainer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./pictureuploadSchema";

function PictureUploadPopup() {
  const { imagesData, setImagesData, setButtonPopup, buttonPopup } =
    useContext(PropContainer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return buttonPopup ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="close">
          <FaWindowClose onClick={() => setButtonPopup(false)} />
        </div>
        <div className="upload-form">
          <form
            onSubmit={(e) => onSubmit(e)}
            method="post"
            encType="multipart/form-data"
          >
            <div className="rowTab">
              <div className="labels">
                <label htmlFor="label">Picture Upload</label>
              </div>
              <div className="rightTab">
                <input
                  {...register("image")}
                  className="input-field"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                />
              </div>
            </div>
            <div className="rowTab">
              <div className="labels">
                <label>Location</label>
              </div>
              <div className="rightTab">
                <PlacesAutocomplete value={imagesData} onChange={setImagesData}>
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div className="places-autocomplete-image-location">
                      <input
                        name="location"
                        id="location"
                        type="string"
                        placeholder="Type the location of the image"
                        className="input-field"
                        {...getInputProps()}
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
                <label>Description</label>
              </div>
              <div className="rightTab">
                <textarea
                  {...register("description")}
                  className="input-field"
                />
              </div>
              <span className="errorStyleShow">
                {errors.description?.message}
              </span>
            </div>
            <div className="rowTab">
              <div className="labels">
                <button className="btn-upload" type="submit">
                  Upload Picture
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {buttonPopup.children}
    </div>
  ) : (
    ""
  );
}

export default PictureUploadPopup;
