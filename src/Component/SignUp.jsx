import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../AuthProvider";

const SignUp = () => {
    const [showPassword, setShowPassword]=useState(false);

    const { createUser }= useContext(AuthContext);

    const handleCreateAccount=(e)=>{
         e.preventDefault();
         const form= e.target;
         const email= form.email.value;
         const password= form.password.value;
         console.log(email, password);
         createUser (email, password)
         .then(result=>{
            console.log(result.user);
            const createdAt = result.user?.metadata?.creationTime;
            const user ={email, createdAt: createdAt};
            fetch('https://coffee-store-server-40vo326ru-al-sunans-projects.vercel.app/user', {
              method: 'POST',
              headers:{
                'content-type' : 'application/json' 
              },
              body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
              if(data.insertedID){
                // sweet alert
              }
            })
         })
         .catch(error=>{
            console.error(error)
         })
    }
    return (
        <div className="text-black">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-5xl text-blue-500 ">
              Create an Account !!! Its free and Simple!!!!!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleCreateAccount}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered border-2 border-blue-500"
                  />
                </div>
                {/* <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    required
                    type="photo"
                    name="photo"
                    placeholder="photoURL"
                    className="input input-bordered border-2 border-blue-500"
                  />
                </div> */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered border-2 border-blue-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered border-2 border-blue-500"
                  />
                  <span
                    className="absolute mt-12 mr-8 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className="form-control mt-6">
                  <button className=" btn btn-primary text-blue-500 text-2xl font-serif rounded bg-gradient-to-r from-pink-500 to-yellow-500">
                    Register
                  </button>
                </div>
              </form>
              
              {/* {registerError && <p>{registerError}</p>}
              {success && <p>{success}</p>} */}
              <div>
                <p className="text-slate-800 font-medium">
                  Already Have an Account? please
                  <Link to={"/login"}>
                    <button className="btn btn-link">Login</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;