import React, {useContext} from "react";
import {PropContainer} from "../../PropContainer";
import {FiSettings} from "react-icons/fi";
import {FaRegArrowAltCircleLeft} from "react-icons/fa";
import {Link} from "react-router-dom";
import {Input} from "semantic-ui-react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "./profileSettingsSchema";
import PlacesAutocomplete from "react-places-autocomplete";

const ProfileSettings = () => {
  const {
    username,
    picture,
    location,
    email,
    website,
    bio,
    setLocation,
    setMessage,
  } = useContext(PropContainer);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

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
      <div className='profile-container'>
        <div className='back'>
          <Link to={`/profile/${username}`}>
            <FaRegArrowAltCircleLeft />
          </Link>
        </div>
        <div className='search-input'>
          <Input
            icon='search'
            placeholder='Search...'
            className='semantic-input'
          />
        </div>
        <div className='profile-settings-button'>
          <Link to='/profile-settings'>
            <FiSettings />
          </Link>
        </div>
      </div>

      <div className='profile-display'>
        <div className='profile-picture-container'>
          <div
            className='profile-image'
            style={{
              backgroundImage: `url(${picture})`,
            }}></div>
        </div>
        <h2>{username}</h2>
        <h6>{location}</h6>
      </div>

      <div className='profile-form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputsMap.map(({label, name, type, placeholder, className}) => (
            <div className='rowTab' key={name}>
              <div className='labels'>
                <label htmlFor={name}>{label}</label>
              </div>

              {/* {displayInputs(name, type, placeholder, className)} */}
              <div className='rightTab'>
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
              </div>
            </div>
          ))}
          <div className='rowTab'>
            <div className='labels'>
              <button className='btn-next' type='submit'>
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;

// const displayInputs = (name, type, placeholder, className) => {
//   if (name === "location") {
//     return (
//       <PlacesAutocomplete value={location} onChange={setLocation}>
//         {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
//           <div className='rightTab'>
//             <input
//               id={name}
//               type={type}
//               className={className}
//               placeholder={placeholder}
//               {...register(name)}
//             />
//             <div>
//               {loading ? <div>...Loading</div> : null}
//               {suggestions.map((suggestion) => {
//                 const style = suggestion.active
//                   ? {backgroundColor: "#41b6e6", cursor: "pointer"}
//                   : {backgroundColor: "#fff", cursor: "pointer"};

//                 return (
//                   <div {...getSuggestionItemProps(suggestion, {style})}>
//                     {suggestion.description}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     );
//   } else
//     return (
//       <div className='rightTab'>
//         <input
//           id={name}
//           type={type}
//           className={className}
//           placeholder={placeholder}
//           {...register(name)}
//         />
//         <span className='errorStyleShow'>{displayError(errors, name)}</span>
//       </div>
//     );
// };
