import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = (
        <>
            <li>
                {" "}
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                {" "}
                <NavLink to={"/addCoffee"}>AddCoffee</NavLink>
            </li>

            <li>
                {" "}
                <NavLink to={"/signUp"}>SignUp</NavLink>
            </li>
            <li>
                {" "}
                <NavLink to={"/logIn"}>LogIn</NavLink>
            </li>

            <li>
            {" "}
            <NavLink to={"users"}>Users</NavLink>
          </li>
        </>
    );
    return (
        <div>
            <div>
                <div className="navbar font-semibold text-orange-500">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {links}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{links}</ul>
                    </div>
                    {/* <div className="navbar-end">
          <p>{user?.displayName}</p>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>

          {user ? (
            <button
              onClick={handleLogOut}
              className="h-8 w-16 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
            >
              Sign Out
            </button>
          ) : (
            <Link to={"/login"}>
              <button className=" h-8 w-16 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... ">
                LogIn
              </button>
            </Link>
          )}
        </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;