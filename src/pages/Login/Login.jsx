import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import authLogo from "../../assets/others/authentication2.png";
import { useEffect, useRef, useState } from "react";

const Login = () => {

    const captchaRef = useRef(null)

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
      loadCaptchaEnginge(6)
    }, [])
    

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    form.reset();
  };

  const handleCaptchaValidate = () => {
    const value = captchaRef.current.value;
    if(validateCaptcha(value)) {
        setDisabled(false)
    } else {
        setDisabled(true)
    }
  }

  return (
    <div>
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
                  type="text"
                  className="input input-bordered inter"
                  name="captcha"
                  placeholder="Type the text above"
                  ref={captchaRef}
                />
                <button className="btn btn-outline btn-xs mt-5 inter" onClick={handleCaptchaValidate}>Validate</button>   
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="inter btn btn-primary"
                  disabled={disabled}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
