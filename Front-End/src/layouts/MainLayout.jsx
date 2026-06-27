import { Outlet } from "react-router-dom";
import OneClickGovNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const MainLayout = () => {
  return (
    <>
      <OneClickGovNavbar />
      <Outlet />
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default MainLayout;
