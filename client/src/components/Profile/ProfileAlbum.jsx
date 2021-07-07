import React, {useState, useEffect} from "react";
import axios from "axios";

const ProfileAlbum = (props) => {
  const [userVisitedAlbum, setUserVisitedAlbum] = useState([]);

  const getPosts = async () => {
    try {
      await axios
        .get(`http://localhost:3001/post/album/${props.album}`, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": sessionStorage.getItem("token"),
            "user-id": sessionStorage.getItem("id"),
          },
        })
        .then((res) => {
          console.log(res);
          setUserVisitedAlbum(res.data);
          //   console.log(res);
          // sessionStorage.setItem("userVisitedAlbum", res.data);
        });
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {userVisitedAlbum.map((post) => (
        <img src={post.picture} key={post._id}></img>
      ))}
    </>
  );
};

export default ProfileAlbum;

// export default class ProfileAlbum extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       albumToFind: this.props.album,
//       userVisitedAlbum: [],
//     };
//   }

//   awaitFunction = async () => {
//     console.log("awaiting", this.props);
//   };

//   getPosts = async () => {
//     await this.awaitFunction();
//     console.log(JSON.stringify(this.state.albumToFind));
//     try {
//       await axios
//         .get(`http://localhost:3001/post/album/${this.props.album}`, {
//           headers: {
//             "Content-Type": "application/json",
//             "x-access-token": sessionStorage.getItem("token"),
//             "user-id": sessionStorage.getItem("id"),
//           },
//         })
//         .then((res) => {
//           console.log(res);
//           this.setState({userVisitedAlbum: res.data}, () =>
//             console.log(this.state.userVisitedAlbum, "userVisitedAlbum")
//           );
//           //   console.log(res);
//           // sessionStorage.setItem("userVisitedAlbum", res.data);
//         });
//     } catch (err) {
//       console.log(err, "err");
//     }
//   };

//   //   componentDidMount() {
//   //     this.getPosts();
//   //   }

//   componentDidUpdate(prevProps) {
//     console.log("component did update");
//     if (this.props.album !== prevProps.album) {
//       this.getPosts();
//     }
//   }

//   render() {
//     return (
//       <>
//         {this.state.userVisitedAlbum.map((post) => (
//           <img src={post.picture} key={post._id}></img>
//         ))}
//       </>
//     );
//   }
// }
