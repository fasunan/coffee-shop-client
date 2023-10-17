import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";


const LogIn = () => {
  const { signInUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then(result => {
        console.log(result.user)
        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime
      }
      fetch('https://coffee-store-server-40vo326ru-al-sunans-projects.vercel.app/user', {
        method: 'PATCH',
        headers: {
          'content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res=>{res.json()})
      .then(data=>{
        console.log(data)
      })
      })
      .catch(error => {
        console.log(error);
      })

  }
  return (
    <div className="text-black">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col items-center justify-center">
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-5xl text-blue-400 ">Login with</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered border-2 border-pink-600"
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
                    className="input input-bordered border-2 border-pink-600"
                  />
                  <span
                    className="absolute mt-12 mr-8 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary  text-blue-500 text-2xl font-serif rounded bg-gradient-to-r from-pink-500 to-yellow-500">
                    Login
                  </button>
                </div>
              </form>

              {/* {loginError && <p>{loginError}</p>}
              {success && <p>{success}</p>} */}
              <div>
                <p className="text-slate-800 font-medium">
                  Do not Have an Account? please
                  <Link to={"/registration"}>
                    <button className="btn btn-link">Create Account</button>
                  </Link>
                </p>
              </div>
              {/* <p className="text-pink-600">Or you can log in with </p>
              <div className="gap-4 font-serif flex text-base">
                <button onClick={handleGoogleLogIn} className="btn w-36">
                  {" "}
                  <FcGoogle className="text-lg"></FcGoogle>Google
                </button>
                <button className="btn w-36">
                  <span>
                    <FaFacebook className="text-blue-500 "></FaFacebook>
                  </span>{" "}
                  Facebook
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;