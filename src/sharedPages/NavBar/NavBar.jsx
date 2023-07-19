import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // logout event handler
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User logOut successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/orderFood/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret page </Link>
      </li>
      {/* user route validation */}
      {user && user ? (
        <>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogOut}>
              Logout
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="fixed z-10 max-w-6xl font-medium text-white bg-black bg-opacity-40 navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navOptions}
          </ul>
        </div>
        <a className="text-xl normal-case btn btn-ghost">Bistro Boss</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <img
          src={user ? user?.photoURL : "no photo"}
          className="w-12 h-12 rounded-full"
          title={user ? user?.displayName : "name"}
        />
      </div>
    </div>
  );
};

export default NavBar;
