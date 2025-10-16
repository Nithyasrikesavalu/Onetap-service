import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import AuthForm from "./pages/Login";
import Shops from "./pages/Shops";
import Services from "./pages/Services_page";
import CreateAcc from "./pages/CreateAcc";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import RequestService from "./components/RequestService";
import TrackOrder from "./components/TrackOrder";
import UploadDocuments from "./components/upload/About";







const App = () => {

    return (<>
        <Navbar />
        <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/service" element={<Services />} />
            <Route path="/Account" element={<CreateAcc />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/request" element={<RequestService />} />
            <Route path="/track" element={<TrackOrder />} />
            <Route path="/upload" element={<UploadDocuments />} />
            <Route path="/Allservice" element={<Services />} />
            <Route path="/upload" element={<UploadDocuments />} />

        </Routes>

    </>)

}
export default App;