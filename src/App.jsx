import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Navbar from "./components/Navbar";
import AuthForm from "./pages/Login";
import Shops from "./pages/Shops";
import Services from "./pages/Services_page";
import CreateAcc from "./pages/CreateAcc";




const App =()=>{

 return(<>
     <Navbar/>
    <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<AuthForm/>} />
        <Route path="/shops" element={<Shops/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/Account" element={<CreateAcc/>} />
    </Routes>
 
 </>)

}
export default App;