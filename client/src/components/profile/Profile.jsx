import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function Profile(props) {
  const [profile, setProfile] = useState("");
  const [picture, setPicture] = useState("");
  const [location, setLocation] = useState("");
  const [username, setUsername] = useState(useParams().username);

  const fetchProfile = async () => {
    const req = await fetch(`http://localhost:3001/user/${username}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setUsername(json.user.username);
        setPicture(json.user.profile_picture);
        setLocation("Berlin");
      })
      .catch((err) => console.log(err));
  };
  console.log(picture);
  useEffect(() => {
    fetchProfile();
  }, []);

  var displayProfile = (
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
      <button className='follow-btn'>Follow</button>
      <button>Message</button>
      <div className='album'>
        <img
          src='https://source.unsplash.com/collection/190727/400x500'
          alt='profile'
        />
        <img
          src='https://source.unsplash.com/collection/190728/400x500'
          alt='profile'
        />
        <img
          src='https://source.unsplash.com/collection/1907200/400x500'
          alt='profile'
        />
        <img
          src='https://source.unsplash.com/collection/190726/400x500'
          alt='profile'
        />
        <img
          src='https://source.unsplash.com/collection/190723/400x500'
          alt='profile'
        />
        <img
          src='https://source.unsplash.com/collection/1907289/400x500'
          alt='profile'
        />
        <img
          src='https://source.unsplash.com/collection/190727/400x500'
          alt='profile'
        />
        <img
          src='https://source.unsplash.com/collection/190728/400x500'
          alt='profile'
        />
        <img
          src='https://source.unsplash.com/collection/1907200/400x500'
          alt='profile'
        />
        <img
          src='https://source.unsplash.com/collection/190726/400x500'
          alt='profile'
        />
        <img
          src='https://source.unsplash.com/collection/190723/400x500'
          alt='profile'
        />
        <img
          src='https://source.unsplash.com/collection/1907289/400x500'
          alt='profile'
        />
      </div>
    </div>
  );

  return <div className='profile'>{displayProfile}</div>;
}

export default Profile;

// class Profile extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: useParams.username,
//       picture: "",
//       location: "Berlin, DE",
//     };
//   }

//   componentDidMount() {
//     fetch(`http://localhost:3001/user/${this.state.username}`)
//       .then((res) => {
//         res.json();
//         console.log(res);
//       })
//       .then((json) =>
//         this.setState({
//           picture: json.picture,
//         })
//       );
//   }

//   render() {
//     return (
//       <div className="profile-display">
//         <div className="profile-picture-container">
//           <div
//             className="profile-image"
//             style={{
//               backgroundImage:
//                 "url(" + this.state.picture ? this.state.picture : null + ")",
//             }}
//           ></div>
//         </div>
//         <h2>{this.state.username}</h2>
//         <h6>{this.state.location}</h6>
//         <button className="follow-btn">Follow</button>
//         <button>Message</button>
//         <div className="album">
//           <img
//             src="https://source.unsplash.com/collection/190727/400x500"
//             alt="profile"
//           />
//           <img
//             src="https://source.unsplash.com/collection/190728/400x500"
//             alt="profile"
//           />
//           <img
//             src="https://source.unsplash.com/collection/1907200/400x500"
//             alt="profile"
//           />
//           <img
//             src="https://source.unsplash.com/collection/190726/400x500"
//             alt="profile"
//           />
//           <img
//             src="https://source.unsplash.com/collection/190723/400x500"
//             alt="profile"
//           />
//           <img
//             src="https://source.unsplash.com/collection/1907289/400x500"
//             alt="profile"
//           />
//           <img
//             src="https://source.unsplash.com/collection/190727/400x500"
//             alt="profile"
//           />
//           <img
//             src="https://source.unsplash.com/collection/190728/400x500"
//             alt="profile"
//           />
//           <img
//             src="https://source.unsplash.com/collection/1907200/400x500"
//             alt="profile"
//           />
//           <img
//             src="https://source.unsplash.com/collection/190726/400x500"
//             alt="profile"
//           />
//           <img
//             src="https://source.unsplash.com/collection/190723/400x500"
//             alt="profile"
//           />
//           <img
//             src="https://source.unsplash.com/collection/1907289/400x500"
//             alt="profile"
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Profile;
