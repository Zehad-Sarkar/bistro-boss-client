import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../sharedPages/Footer/Footer";
import NavBar from "../../sharedPages/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <NavBar />}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
