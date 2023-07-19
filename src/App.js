
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import toast, { Toaster } from "react-hot-toast";
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Login from "./pages/Login";
// import Catproduct from "./pages/Catproduct";
import Register from "./pages/Register";
import Productcat from "./pages/Productcat";


function App() {
  return (
   <>
   <div>
    <Header/>
    <BrowserRouter>
       
       <Routes>
        
       <Route path='/' element={<Home/>}/>
       <Route path='/Login' element={<Login/>}/>
       {/* <Route path='/catproduct/:id' element={<Catproduct/>}/> */}
       <Route path='/Productcat/:id' element={<Productcat/>}/>
       <Route path='/Register' element={<Register/>}/>
       
    
       </Routes>
      
      </BrowserRouter>
    <Footer/>
    <Toaster
    position="top-right"
    reverseOrder={false}
    />
   </div>

   </>
  );
}

export default App;
