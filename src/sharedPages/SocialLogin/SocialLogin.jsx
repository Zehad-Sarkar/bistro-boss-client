import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;

        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full my-4 text-center bg-gray-400">
        <button
          onClick={handleGoogleLogin}
          className="w-full px-1 btn btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
