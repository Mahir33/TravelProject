import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./mobileLoginSchema";
import { useState } from "react";

function MobileLogin(props) {
  const [message, setMessage] = useState("");
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
        if (res.username) {
          //if we have a user then we want to redirect
          console.log(props);
          props.history.push("/home");
        }
        setMessage(res.message);
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
            class="btn-next"
            type="submit"
          >
            log in
          </button>
          <span className="errorStyleShow">{message}</span>
        </form>
      </div>
    </div>
  );
}

export default MobileLogin;
