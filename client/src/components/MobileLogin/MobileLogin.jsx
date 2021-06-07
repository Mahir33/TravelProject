import { Link, Redirect } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./mobileLoginSchema";
import { useContext } from "react";
import { PropContainer } from "../../PropContainer";

function MobileLogin() {
  const { username, setUsername, message, setMessage } =
    useContext(PropContainer);
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
          setUsername(res.username);
          //if we have a user then we want to redirect
          // props.history.push("/home");
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
