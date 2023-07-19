import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useRef } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const formRef = useRef(null);
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const { signInUser } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // login event handler
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });

    formRef.current.reset();
  };

  // captcha validate event handler
  const handleValidateCaptcha = (e) => {
    // const userCaptcha = captchaRef.current.value;
    const userCaptcha = e.target.value;
    if (validateCaptcha(userCaptcha)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col w-full hero-content">
          <div className="text-center md:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form
            ref={formRef}
            onSubmit={handleLogin}
            className="shadow-2xl md:w-1/2 card bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Validate captcha</span>
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  // ref={captchaRef}
                  name="captcha"
                  placeholder="type the captcha"
                  className="input input-bordered"
                />
                <LoadCanvasTemplate />
                {/* <button
                  onBlur={handleValidateCaptcha}
                  className="btn btn-outline btn-xs btn-primary"
                >
                  Validate
                </button> */}
              </div>
              <div className="mt-6 form-control">
                <input
                  disabled={disable}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </div>
          </form>
          <p>
            <small>
              Don't have an acount ?
              <Link to="/signUp" className="ml-2 text-blue-400">
                go to sign up
              </Link>
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
