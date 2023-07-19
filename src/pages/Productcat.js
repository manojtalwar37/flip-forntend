import axios from 'axios';
import { useState } from "react";
import toast, {Toaster} from 'react-hot-toast';


const Productcat =() =>{
    const params = window.location.pathname.split('/Productcat/')
    const[products, setProducts] = useState([]);
    const[name, setName] = useState('');
    const[image, setImage] = useState('');
    const[handleproduct, setHandleProduct] = useState('');
    const HandleProduct = async(e) =>{
        e.preventDefault();
        if(name==""||image==""){
            toast.error("Please fill required fields!");
            return false;
        }
        const res = await axios.post("http://127.0.0.1:5000/productcats",{
            id:params[1],
            name:name,
            image:image
        });
        setProducts(res.data);
    }
    return(
        <>
             <main className="m-auto">
       
       <div className="py-5 text-center">
         <img
           className="d-block mx-auto mb-4"           
           src="/docs/5.3/assets/brand/bootstrap-logo.svg"   
           alt=""
           width={72}
           height={57}
         />
         <h1>Form</h1>
        
       </div>
       <div className="row col-8 m-auto ">
       </div>
         <div className="col-md-7 col-lg-8 ms-5">
           <h4 className="mb-3">Category</h4>
           <form className="needs-validation" noValidate="" onSubmit={HandleProduct}>
             <div className="row g-3">
               <div className="col-sm-6">
                 <label htmlFor="firstName" className="form-label">
                   Category name
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   id="firstName"
                   placeholder=""
                   defaultValue=""
                   onKeyUp={(e) => setName(e.target.value)}
                   required=""
                 />
                 </div>
                 <div className="invalid-feedback">
                   Valid first name is required.
                 </div>
               </div>
               <div className="col-sm-6">
                 <label htmlFor="lastName" className="form-label">
                   Category Image
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   id="Last Name"
                   placeholder=""
                   defaultValue=""
                   onKeyUp={(e) => setImage(e.target.value)}
                   required=""
                 />
                
                
             <hr className="my-4" />
             <button className="w-100 btn btn-primary btn-lg" type="submit" >
               Continue to checkout
             </button>
             </div>
           </form>
         </div>
        
     </main>
        </>
    )
};
export default Productcat;