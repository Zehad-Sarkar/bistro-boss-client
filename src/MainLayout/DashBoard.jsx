import {
  FaCalendar,
  FaHamburger,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile m-4">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-center drawer-content">
        {/* <!-- Page content here --> */}
        {/* outlet for dashboard */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="p-4 menu w-80  bg-[#D1A054] text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/home">
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/calender">
              <FaCalendar></FaCalendar>Rerservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet></FaWallet>Payment History
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart></FaShoppingCart> My Cart
              <span className="badge w-8 bg-purple-950-600">{cart.length || 0}</span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaHamburger></FaHamburger> Our Menu{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
