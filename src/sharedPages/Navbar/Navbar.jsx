import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Contact us</Link>
      </li>
      <li>
        <Link>DashBoard</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu </Link>
      </li>
      <li>
        <Link>Our Shop</Link>
      </li>
      <li>
        <a>SignOut</a>
      </li>
    </>
  );
  return (
    <div className="fixed z-10 max-w-6xl mx-auto text-white bg-black navbar">
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
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="text-xl normal-case btn btn-ghost">
          Bistro Boss
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Get started</a>
      </div>
    </div>
  );
};

export default Navbar;
