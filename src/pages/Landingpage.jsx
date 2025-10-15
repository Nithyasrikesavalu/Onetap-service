import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import OurServices from "../components/Services";
// import PrivacySection from "../components/Security";
import Footer from "../components/Footer";
import NearbyXerox from "../components/Shops";
// import Login from "./Login";

const Landingpage =()=>{

   return(<>
    <Hero/>
    <About/>
    <NearbyXerox/>
    <OurServices/>
    <Footer/>
   </>)


}
export default Landingpage;