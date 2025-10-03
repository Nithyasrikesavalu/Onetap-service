import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Navbar from "./components/Navbar";



const App =()=>{

 return(<>
     <Navbar/>
    
    <Routes>
        <Route path="/" element={<Landingpage/>}/>
    </Routes>
 
 </>)

}
export default App;