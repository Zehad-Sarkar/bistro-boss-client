import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../sharedPages/Secret/Secret";
import ProtectedRoute from "./Privateroute/ProtectedRoute";
import DashBoard from "../Layout/DashBoard/DashBoard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },

      {
        path: "/orderFood/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <ProtectedRoute>
            <Secret />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "myCart",
        element: <MyCart />,
      },
    ],
  },
]);
