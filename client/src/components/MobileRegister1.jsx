import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useRef } from "react";
import { useForm } from "react-hook-form";

function MobileRegister1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => console.log(data);

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
            {...register("userName", {
              required: true,
              maxLength: 20,
              pattern: /^[a-zA-Z0-9]+$/i,
            })}
          />
          <input
            type="text"
            placeholder="E-mail"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
            })}
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirm_password", {
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          <button
            className="btn-next"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            next
          </button>
          {errors.password && <p>{errors.password.message}</p>}
          {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
        </form>
      </div>
    </div>
  );
}

export default MobileRegister1;
