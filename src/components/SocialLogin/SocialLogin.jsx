import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleLogin().then((result) => {
      const loggedInUser = result.user;
      const savedUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        photoURL: loggedInUser.photoURL,
      };
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then(() => {
          console.log("Redirecting to the homepage");
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div className="py-4 text-center">
      <div onClick={handleGoogleSignIn} className="btn-circle btn-primary btn">
        <FaGoogle />
      </div>
    </div>
  );
};

export default SocialLogin;
