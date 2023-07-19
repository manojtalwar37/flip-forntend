import axios from "axios";
import { useState, useEffect } from "react";


const Catproduct = () =>{
       
    const params = window.location.pathname.split('/')
    console.log(params)
    const [prod,setProd] = useState([]);
    useEffect(()=>{
        Prod();
    })

    async function Prod(){
        const res =await axios.post("http://127.0.0.1:5000/Products",{
            id:params[1]
        });
        setProd(res.data);
        console.log(res.data);
    }

    return(
        

        <>
      <div className="album py-5 bg-body-tertiary">
  <div className="container">
    <div className="row d-flex">
      <div className="col-lg-12 d-flex gap-5 ">
            {prod.map((item)  => {
               return (
                        
                
                <div className="card w-25" >
  <img src={item.images} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">
    {item.description}
    </p> 
    {/* <button type = "button" onClick={(e) => handleAddCart(item)} className="btn btn-secondary px-4">
      Add to Cart
      </button> */}
   </div>
</div>

               )
            } )}
          
         
      </div>
    </div>
  </div>
</div> 
        </>


    )


}

export default Catproduct;