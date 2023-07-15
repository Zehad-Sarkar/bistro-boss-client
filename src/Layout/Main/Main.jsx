import { Outlet } from "react-router-dom";
import Footer from "../../sharedPages/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
