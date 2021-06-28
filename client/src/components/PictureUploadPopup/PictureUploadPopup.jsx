import PlacesAutocomplete from "react-places-autocomplete";
import React, {useState, useContext} from "react";
import {FaWindowClose} from "react-icons/fa";
import {PropContainer} from "../../PropContainer";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {pictureUploadSchema} from "./pictureuploadSchema";

const PictureUploadPopup = () => {
  const {buttonPopup, setButtonPopup} = useContext(PropContainer);

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(pictureUploadSchema),
  });

  const onSubmit = (data) => {
    console.log("hello");
  };

  const inputsMap = [
    {
      label: "Picture Upload",
      name: "picture",
      type: "file",
      placeholder: "",
      className: "input-field",
      ref: picture,
    },
    {
      label: "Location",
      name: "location",
      type: "text",
      placeholder: "",
      className: "input-field",
    },
    {
      label: "Description",
      name: "description",
      type: "text",
      placeholder: "",
      className: "input-field",
    },
  ];

  const displayInputs = (name, type, placeholder, className, ref) => {
    if (name === "location") {
      return (
        <PlacesAutocomplete value={location} onChange={setLocation}>
          {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
            <div className="rightTab" key={name}>
              <input
                {...getInputProps({
                  name: name,
                  placeholder: placeholder,
                  type: type,
                  className: className,
                })}
              />
              <div>
                {loading ? <div>...Loading</div> : null}
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? {backgroundColor: "#41b6e6", cursor: "pointer"}
                    : {backgroundColor: "#fff", cursor: "pointer"};

                  return (
                    <div {...getSuggestionItemProps(suggestion, {style})}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      );
    } else {
      return (
        <div className="rightTab" key={name}>
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
    }
  };

  const displayError = (errors, name) => {
    switch (name) {
      case "picture":
        return errors.picture?.message;
      case "location":
        return errors.location?.message;
      case "description":
        return errors.description?.message;
      default:
        return null;
    }
  };

  return buttonPopup ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="close">
          <FaWindowClose onClick={() => setButtonPopup(false)} />
        </div>

        <div className="upload-form">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            encType="multipart/form-data">
            {inputsMap.map(
              ({label, name, type, placeholder, className, ref}) => (
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
                <button
                  className="btn-upload"
                  type="submit"
                  onSubmit={handleSubmit(onSubmit)}>
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

export default PictureUploadPopup;

//   return buttonPopup ? (
//     <div className="popup">
//       <div className="popup-inner">
//         <div className="close">
//           <FaWindowClose onClick={() => setButtonPopup(false)} />
//         </div>
//         <div className="upload-form">
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             method="post"
//             encType="multipart/form-data">
//             <div className="rowTab">
//               <div className="labels">
//                 <label htmlFor="label">Picture Upload</label>
//               </div>
//               <div className="rightTab">
//                 <input
//                   className="input-field"
//                   type="file"
//                   {...register("image")}
//                 />
//               </div>
//             </div>
//             <div className="rowTab">
//               <div className="labels">
//                 <label>Location</label>
//               </div>
//               <div className="rightTab">
//                 <PlacesAutocomplete value={location} onChange={setLocation}>
//                   {({
//                     getInputProps,
//                     suggestions,
//                     getSuggestionItemProps,
//                     loading,
//                   }) => (
//                     <div className="places-autocomplete-image-location">
//                       <input
//                         name="location"
//                         id="location"
//                         type="text"
//                         placeholder="Type the location of the image"
//                         className="input-field"
//                         {...getInputProps("location")}
//                       />
//                       <div>
//                         {loading ? <div>...Loading</div> : null}
//                         {suggestions.map((suggestion) => {
//                           const style = suggestion.active
//                             ? {backgroundColor: "#41b6e6", cursor: "pointer"}
//                             : {backgroundColor: "#fff", cursor: "pointer"};

//                           return (
//                             <div
//                               {...getSuggestionItemProps(suggestion, {style})}>
//                               {suggestion.description}
//                             </div>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   )}
//                 </PlacesAutocomplete>
//               </div>
//             </div>
//             <div className="rowTab">
//               <div className="labels">
//                 <label>Description</label>
//               </div>
//               <div className="rightTab">
//                 <input
//                   type="text"
//                   {...register("description")}
//                   className="input-field"
//                 />
//               </div>
//               <span className="errorStyleShow">
//                 {errors.description?.message}
//               </span>
//             </div>
//             <div className="rowTab">
//               <div className="labels">
//                 <button
//                   className="btn-upload"
//                   type="submit"
//                   onClick={handleSubmit(onSubmit)}>
//                   Upload Picture
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//       {buttonPopup.children}
//     </div>
//   ) : null;
// }
