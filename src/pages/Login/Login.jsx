import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import authLogo from "../../assets/others/authentication2.png";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

  const { signIn } = useContext(AuthContext)
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email , password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      Swal.fire(
        'Logged In',
        'Want to try some dishes?',
        'success'
      )
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.message}`,
      })
    })


    form.reset();
  };

  const handleCaptchaValidate = e => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <Helmet>
        <title>
          Bistro Boss | Login
        </title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row w-1/2">
          <div>
            <img src={authLogo} alt="" />
          </div>
          <form
            className="card w-2/3 shadow-2xl bg-base-100"
            onSubmit={handleLogin}
          >
            <div className="card-body">
              <div className="form-control inter">
                <label className="label">
                  <span className="label-text inter">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text inter">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered inter"
                  placeholder="password"
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label text-white">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleCaptchaValidate}
                  type="text"
                  className="input input-bordered inter"
                  name="captcha"
                  placeholder="Type the text above"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="inter btn btn-primary"
                  disabled={disabled}
                />
              </div>
              <p>
                <small className="inter">
                  New Here? <Link to={"/signup"} className="inter">Creat an account</Link>
                </small>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
