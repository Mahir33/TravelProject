import React, { Component } from "react";
import { useParams } from "react-router-dom";

// function Profile(username) {
//   const [profile, setProfile] = useState();

//   const fetchProfile = async () => {
//     const req = await await fetch(
//       `http://localhost:3001/user/${username.username}`
//     )
//       .json()
//       .then((json) => setProfile(json.user))
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   console.log(profile);

//   var displayProfile = (
//     <div className="profile-display">
//       <div className="profile-picture-container">
//         <div
//           className="profile-image"
//           style={{ backgroundImage: "url(" + profile.profile_picture + ")" }}
//         ></div>
//       </div>
//       <h2>{profile.username}</h2>
//       <h6>Location</h6>
//       <button className="follow-btn">Follow</button>
//       <button>Message</button>
//     </div>
//   );

//   return <div className="profile">{displayProfile}</div>;
// }

// export default Profile;

console.log(useParams);

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: useParams.username,
      picture: "",
      location: "Berlin, DE",
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3001/user/${this.state.username}`)
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((json) =>
        this.setState({
          picture: json.picture,
        })
      );
  }

  render() {
    return (
      <div className="profile-display">
        <div className="profile-picture-container">
          <div
            className="profile-image"
            style={{
              backgroundImage:
                "url(" + this.state.picture ? this.state.picture : null + ")",
            }}
          ></div>
        </div>
        <h2>{this.state.username}</h2>
        <h6>{this.state.location}</h6>
        <button className="follow-btn">Follow</button>
        <button>Message</button>
        <div className="album">
          <img
            src="https://source.unsplash.com/collection/190727/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190728/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/1907200/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190726/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190723/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/1907289/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190727/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190728/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/1907200/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190726/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190723/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/1907289/400x500"
            alt="profile"
          />
        </div>
      </div>
    );
  }
}

export default Profile;
