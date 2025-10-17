import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import AuthForm from "./pages/Login";
import Shops from "./pages/ShopsPage";
import Services from "./pages/Services_page";

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import RequestService from "./components/RequestService";
import TrackOrder from "./components/TrackOrder";
import AboutPage from "./pages/AboutPage";
import UserProfile from "./components/user/user";

const App = () => {
  return (
    <>
      {/* <UserProfile /> */}

      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<AuthForm />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/request" element={<RequestService />} />
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/upload" element={<AboutPage />} />
          <Route path="/Allservice" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
