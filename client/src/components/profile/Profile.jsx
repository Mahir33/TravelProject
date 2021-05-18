import React, { Component } from "react";
import "./Profile.scss";

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

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      picture: "",
      location: "Berlin, DE",
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3001/user/${this.props.username}`)
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          username: json.user.username,
          picture: json.user.profile_picture,
        })
      );
  }

  render() {
    return (
      <div className="profile-display">
        <div className="profile-picture-container">
          <div
            className="profile-image"
            style={{ backgroundImage: "url(" + this.state.picture + ")" }}
          ></div>
        </div>
        <h2>{this.state.username}</h2>
        <h6>{this.state.location}</h6>
        <button className="follow-btn">Follow</button>
        <button>Message</button>
        <div className="album">
          <img src="https://source.unsplash.com/collection/190727/400x500" />
          <img src="https://source.unsplash.com/collection/190728/400x500" />
          <img src="https://source.unsplash.com/collection/1907200/400x500" />
          <img src="https://source.unsplash.com/collection/190726/400x500" />
          <img src="https://source.unsplash.com/collection/190723/400x500" />
          <img src="https://source.unsplash.com/collection/1907289/400x500" />
          <img src="https://source.unsplash.com/collection/190727/400x500" />
          <img src="https://source.unsplash.com/collection/190728/400x500" />
          <img src="https://source.unsplash.com/collection/1907200/400x500" />
          <img src="https://source.unsplash.com/collection/190726/400x500" />
          <img src="https://source.unsplash.com/collection/190723/400x500" />
          <img src="https://source.unsplash.com/collection/1907289/400x500" />
        </div>
      </div>
    );
  }
}

export default Profile;
