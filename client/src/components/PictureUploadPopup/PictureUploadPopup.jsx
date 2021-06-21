import PlacesAutocomplete from "react-places-autocomplete";
import { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { PropContainer } from "../../PropContainer";

function PictureUploadPopup(props) {
  const { imageLocation, setImageLocation, setButtonPopup } =
    useContext(PropContainer);
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="close">
          <FaWindowClose onClick={() => setButtonPopup(false)} />
        </div>
        <div className="upload-form">
          <form>
            <div className="rowTab">
              <div className="labels">
                <label htmlFor="label">Picture Upload</label>
              </div>
              <div className="rightTab">
                <input
                  type="file"
                  name="image"
                  accept="image/png, image/gif, image/jpeg"
                />
              </div>
            </div>
            <div className="rowTab">
              <div className="labels">
                <label>Location</label>
              </div>
              <div className="rightTab">
                <PlacesAutocomplete
                  value={imageLocation}
                  onChange={setImageLocation}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div className="places-autocomplete-image-location">
                      <input
                        {...getInputProps({
                          placeholder: "Type the location of the image",
                          className: "image-location",
                        })}
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
                <textarea />
              </div>
            </div>
            <div className="rowTab">
              <div className="labels">
                <button className="btn-next" type="submit">
                  Upload Picture
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default PictureUploadPopup;
