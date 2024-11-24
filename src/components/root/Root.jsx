import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
   
    return (
        <div>
                <Toaster/>
                <NavBar/>
                <Outlet/>
                <Footer/>
        </div>
    );
};
export default Root;