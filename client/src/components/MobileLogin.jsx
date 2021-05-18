import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./mobileLoginSchema";

function MobileLogin() {
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
    });
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
            {...register("password", {
              minLength: {
                value: 8,
              },
            })}
          />
          <span className="errorStyleShow">
            {errors.password && "*Password must have at least 8 characters"}
          </span>
          <button
            onClick={handleSubmit(onSubmit)}
            class="btn-next"
            type="submit"
          >
            log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default MobileLogin;
