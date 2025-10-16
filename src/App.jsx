import { Route, Routes, useLocation } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import AuthForm from "./pages/Login";
import Shops from "./pages/Shops";
import Services from "./pages/Services_page";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<AuthForm />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/service" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
