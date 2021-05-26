import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./mobileRegisterSchema.js";
import { useState } from "react";

function MobileRegister1(props) {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const { username, email, password } = data;
    await fetch("http://localhost:3001/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.username) {
          //if we have a user then we want to redirect
          console.log(props);
          props.history.push("/register-success");
        }
        setMessage(res.message);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="register">
      <div className="back">
        <Link to="/">
          <FaRegArrowAltCircleLeft />
        </Link>
      </div>
      <div className="reg">
        <h1>register</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Username"
            {...register("username", {
              maxLength: 20,
            })}
          />
          <span className="errorStyleShow">{errors.username?.message}</span>
          <input type="text" placeholder="E-mail" {...register("email")} />
          <span className="errorStyleShow">{errors.email?.message}</span>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              minLength: {
                value: 8,
              },
            })}
          />
          <span className="errorStyleShow">{errors.password?.message}</span>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirm_password")}
          />
          <span className="errorStyleShow">
            {errors.confirm_password && "*Passwords should match!"}
          </span>
          <button
            className="btn-next"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            next
          </button>
          <span className="errorStyleShow">{message}</span>
        </form>
      </div>
    </div>
  );
}

export default MobileRegister1;
