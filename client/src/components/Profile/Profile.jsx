import React, {useState, useEffect, useContext} from "react";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import axios from "axios";
import ProfileAlbum from "./ProfileAlbum";
import {useParams} from "react-router";
import {PropContainer} from "../../PropContainer";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

function Profile() {
  const username = useParams().username;
  const [userVisited, setUserVisited] = useState();
  const [loading, setLoading] = useState(true);
  const {followers, setFollowers} = useContext(PropContainer);

  const updateAfterFollow = (followersToUpdate) => {
    console.log(followersToUpdate);
    const sessionUser = JSON.parse(sessionStorage.getItem("user"));
    sessionUser.followers = followersToUpdate;
    sessionStorage.setItem("user", JSON.stringify(sessionUser));

    setFollowers(followersToUpdate);
  };

  const updateAfterUnfollow = (followersToUpdate) => {
    console.log(followersToUpdate);
    // let followersToUpdate = followers;
    // const index2 = followers.indexOf(unfollow);

    // let sessionUser = JSON.parse(sessionStorage.getItem("user"));
    // const index = sessionUser.followers.indexOf(unfollow);
    // if (index > -1) {
    //   sessionUser.followers.splice(index, 1);
    // }
    // sessionStorage.setItem("user", JSON.stringify(sessionUser));

    // if (index2 > -1) {
    //   followersToUpdate.splice(index2, 1);
    //   setFollowers(followersToUpdate);
    // }

    let sessionUser = JSON.parse(sessionStorage.getItem("user"));
    sessionUser.followers = followersToUpdate;
    sessionStorage.setItem("user", JSON.stringify(sessionUser));
    setFollowers(followersToUpdate);
  };

  const followUser = async () => {
    try {
      await axios
        .put(
          "http://localhost:3001/user/follow",
          {toFollowId: userVisited._id},
          {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": sessionStorage.getItem("token"),
              "user-id": sessionStorage.getItem("id"),
            },
          }
        )
        .then((res) => updateAfterFollow(res.data.followers));
    } catch (err) {
      console.log(err);
    }
  };

  const unfollowUser = async () => {
    try {
      await axios
        .put(
          "http://localhost:3001/user/unfollow",
          {toUnfollowId: userVisited._id},
          {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": sessionStorage.getItem("token"),
              "user-id": sessionStorage.getItem("id"),
            },
          }
        )
        .then((res) => {
          if (res.data) updateAfterUnfollow(res.data.followers);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
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
          setUserVisited(res.data[0]);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    getUser();

    return function cleanUp() {
      setLoading(true);
    };
  }, [username, followers]);

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
        {followers.includes(userVisited._id) ? (
          <button className="follow-btn" onClick={unfollowUser}>
            Unfollow
          </button>
        ) : (
          <button className="follow-btn" onClick={followUser}>
            Follow
          </button>
        )}

        <button>Message</button>
        <div className="album">
          {/* {userVisitedAlbum.map((post) => (
            <img src={post.picture} key={post._id}></img>
          ))} */}
          <ProfileAlbum album={userVisited.album} />
        </div>
      </div>
      <MobileNavbar />
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
