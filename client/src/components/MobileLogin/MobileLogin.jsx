import { Link, Redirect } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./mobileLoginSchema";
import { useContext } from "react";
import { PropContainer } from "../../PropContainer";

function MobileLogin() {
  const {
    username,
    message,
    setMessage,
    setUsername,
    setEmail,
    setAlbum,
    setId,
    setLocation,
    setPicture,
    setWebsite,
    setBio,
    setRegistered,
  } = useContext(PropContainer);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const { email, password } = data;
    await fetch("http://localhost:3001/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.user) {
          console.log(res.user);
          setUsername(res.user.username);
          setEmail(res.user.email);
          setAlbum(res.user.album);
          setId(res.user._id);
          setLocation(res.user.location);
          setPicture(res.user.profilePicture);
          setWebsite(res.user.website);
          setBio(res.user.bio);
          setRegistered(true);
        }
        setMessage(res.message);
        sessionStorage.setItem("token", res.token);
        sessionStorage.setItem("id", res.user._id);

        sessionStorage.setItem("user", JSON.stringify(res.user));
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="log-in">
      <div className="back">
        <Link to="/">
          <FaRegArrowAltCircleLeft />
        </Link>
      </div>
      <div className="log">
        <h1>log in</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="E-mail" {...register("email")} />
          <span className="errorStyleShow">{errors.email?.message}</span>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {})}
          />
          <span className="errorStyleShow">{errors.password?.message}</span>
          <button
            onClick={handleSubmit(onSubmit)}
            className="btn-next"
            type="submit"
          >
            log in
          </button>
          {message === "Successfully logged in!" ? null : (
            <span className="errorStyleShow">{message}</span>
          )}
        </form>
        <p className="forget-register">
          If you don't have an account, Register{" "}
          <Link to="/register">here</Link>
        </p>
      </div>
      {username ? <Redirect to={`/home`} /> : null}
    </div>
  );
}

export default MobileLogin;
