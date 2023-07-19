import { useEffect,useState } from "react";

const Login =() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  const [success,setSuccess] = useState('');
  const user= localStorage.getItem('uemail');

  useEffect(() => {
  
    if(user){
      window.location.href="/";

    }
    
   });

   
   const LoginHandle = async(e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if(email==""){
      setError("Please Enter Your Email");
      return false;
    }
    if(password==""){
      setError("Please Enter Your password");
      return false;
    }
    let res= await fetch("http://127.0.0.1:5000/login",{
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email:email,
        password:password
      })
     });
     res = await res.json();
     
     if(res.error){
      setError(res.error);
      return false;
     }
  
     if(res.token){
      localStorage.setItem('uemail',email);
      localStorage.setItem('token',res.token);
      
      setSuccess(res.msg);
     }
    }


return (
    <>
  
  <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
      {error && <div className="alert alert-danger">{error}</div> }
            {success && <div className="alert alert-success">{success}</div> }
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid"
          alt="Phone image"
        />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form method="post" onSubmit={LoginHandle}>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="email"
              id="email"
              className="form-control form-control-lg"
              onKeyUp={(e) => setEmail(e.target.value)}
            />
            <label className="form-label" htmlFor="form1Example13">
              Email address
            </label>
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
            <input
              type="password"
              id="password"
              className="form-control form-control-lg"
              onKeyUp={(e) => setPassword(e.target.value)}
            />
            <label className="form-label" htmlFor="form1Example23">
              Password
            </label>
          </div>
          <div className="d-flex justify-content-around align-items-center mb-4">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="form1Example3"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="form1Example3">
                {" "}
                Remember me{" "}
              </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Sign in
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
);
}
export default Login;