import { Outlet } from "react-router-dom";
import OneClickGovNavbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <OneClickGovNavbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
