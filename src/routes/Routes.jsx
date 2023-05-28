import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../sharedPages/Menu/Menu/Menu";
import Order from "../sharedPages/Order/Order/Order";
import Login from "../sharedPages/Login/Login";
import SignUp from "../sharedPages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../sharedPages/Secret/Secret";
import DashBoard from "../MainLayout/DashBoard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);
