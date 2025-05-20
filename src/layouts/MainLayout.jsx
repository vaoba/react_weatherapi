import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  return (
    <>
        <div className="content">
            <Outlet/>
        </div>
        <Footer/>
    </>
  );
}

export default MainLayout;