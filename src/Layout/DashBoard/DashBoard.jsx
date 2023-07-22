import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUtensilSpoon } from "react-icons/fa";
import useCart from "../../hooks/useCart/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  return (
    <div className=" drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-center drawer-content">
        {/* outlet seen here */}
        <Outlet />
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="bg-yellow-600 drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="h-full p-2 w-60 menu ">
          {/* Sidebar content here */}
          {/* admin dashboard */}
          <li>
            <span className="">
                <FaHome />
              <NavLink to="/dashboard/home">
                Admin Home
              </NavLink>
            </span>
          </li>

          <li>
            <NavLink to="/dashboard/add">
              <FaUtensilSpoon /> Add Item
            </NavLink>
          </li>

          <li>
            <NavLink>Manage Items</NavLink>
          </li>

          <li>
            <NavLink>Manage Bookings</NavLink>
          </li>

          <li>
            <NavLink>All Users</NavLink>
          </li>
          <hr className="my-2 text-red-500 border-2" />
          {/* user dashboard */}
          <li>
            <NavLink to="/dashboard/home">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myCart">
              <FaShoppingCart />
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
              My Cart
            </NavLink>
          </li>
          <hr className="my-2 text-red-500 border-2" />
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
