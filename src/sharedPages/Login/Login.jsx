import { useContext, useEffect,  useState } from "react";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [disabled, setdisabled] = useState(true);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //for captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  //login event handler
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        navigate(from, { replace: true });
        Swal.fire({
          title: "User login successfull",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  //captcha validation event handler
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bristo Boss | Login</title>
      </Helmet>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="max-w-sm shadow-2xl md:w-1/2 card bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="type captcha"
                  className="input input-bordered"
                />
              </div>
              <div className="mt-6 form-control">
                <input
                  type="submit"
                  value="Login"
                  disabled={disabled}
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="mb-8 text-center ">
              New Here ? <Link to="/register">Create An Account</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
