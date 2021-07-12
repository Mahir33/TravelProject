import React, {useState, useEffect} from "react";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import axios from "axios";
import ProfileAlbum from "./ProfileAlbum";
import {useParams} from "react-router";
import {PropContainer} from "../../PropContainer";

function Profile() {
  const username = useParams().username;
  const [userVisited, setUserVisited] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(username);
    const getUser = async () => {
      await axios
        .get(`http://localhost:3001/user/${username}`, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": sessionStorage.getItem("token"),
            "user-id": sessionStorage.getItem("id"),
          },
        })
        .then((res) => {
          console.log(res.data);
          setUserVisited(res.data[0]);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    getUser();
  }, [username]);

  return loading ? null : (
    <div className="profile">
      <ProfileNavbar />
      <div className="profile-display">
        <div className="profile-picture-container">
          <div
            className="profile-image"
            style={{
              backgroundImage: `url(${userVisited.profilePicture})`,
            }}></div>
        </div>
        <h2>{userVisited.username}</h2>
        <h5>{userVisited.location}</h5>
        <button className="follow-btn">Follow</button>
        <button>Message</button>
        <div className="album">
          {/* {userVisitedAlbum.map((post) => (
            <img src={post.picture} key={post._id}></img>
          ))} */}
          <ProfileAlbum album={userVisited.album} />
        </div>
      </div>
    </div>
  );
}

export default Profile;

// class Profile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: this.props.match.params.username,
//       userVisited: {},
//       profilePicture: "",
//       album: [],
//     };
//   }

//   getUser = async () => {
//     console.log("here");
//     // try {
//     await axios
//       .get(`http://localhost:3001/user/${this.state.username}`, {
//         headers: {
//           "Content-Type": "application/json",
//           "x-access-token": sessionStorage.getItem("token"),
//           "user-id": sessionStorage.getItem("id"),
//         },
//       })
//       .then((res) => {
//         this.setState(
//           {
//             profilePicture: res.data[0].profilePicture,
//             visitedUsername: res.data[0].username,
//             location: res.data[0].location,
//             album: [...res.data[0].album],
//           },
//           () => {
//             console.log(this.state);
//           }
//         );
//         console.log(res.data[0]);
//         // this.setState({userVisited: res.data[0]});

//         // sessionStorage.setItem("userVisited", JSON.stringify(res.data[0]));
//         // setUser(res.data[0]);
//         // setAlbum(res.data[0].album);
//       });
//     // }catch (err) {
//     //   console.log(err);
//     // }
//   };

//   componentDidMount() {
//     this.getUser();
//   }

//   render() {
//     return (
//       <div className="profile">
//         <ProfileNavbar />
//         <div className="profile-display">
//           <div className="profile-picture-container">
//             <div
//               className="profile-image"
//               style={{
//                 backgroundImage: `url(${this.state.profilePicture})`,
//               }}></div>
//           </div>
//           <h2>{this.state.username}</h2>
//           <h5>{this.state.location}</h5>
//           <button className="follow-btn">Follow</button>
//           <button>Message</button>
//           <div className="album">
//             {/* {this.state.userVisitedAlbum.map((post) => (
//             <img src={post.picture} key={post._id}></img>
//           ))} */}
//             <ProfileAlbum album={this.state.album} />
//           </div>
//         </div>
//         <MobileNavbar />
//       </div>
//     );
//   }
// }

// export default withRouter(Profile);
