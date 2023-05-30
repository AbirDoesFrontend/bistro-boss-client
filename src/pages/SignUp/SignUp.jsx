import { Link } from "react-router-dom";
import authLogo from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext)

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email , data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
    })
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-1/2">
          <div>
            <img src={authLogo} alt="" />
          </div>
          <form
            className="card w-2/3 shadow-2xl bg-base-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="card-body">
              <h2 className="inter text-2xl">Sign Up</h2>
              <div className="form-control inter">
                <label className="label">
                  <span className="label-text inter">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 mt-2 inter">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control inter">
                <label className="label">
                  <span className="label-text inter">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 mt-2 inter">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text inter">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered inter"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  name="password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600 inter mt-2">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 inter mt-2">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600 inter mt-2">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600 inter mt-2">
                    Password must contain one uppercase , one lowercase , one
                    number and one special character
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="inter btn btn-primary"
                />
              </div>
              <p>
                <small className="inter">
                  Already have an account?{" "}
                  <Link to={"/login"} className="inter">
                    Login
                  </Link>
                </small>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
