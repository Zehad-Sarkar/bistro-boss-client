import { Outlet } from "react-router-dom";
import Footer from "../../sharedPages/Footer/Footer";
import NavBar from "../../sharedPages/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
