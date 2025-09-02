import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useContext } from "react";

const Signup = () => {
  const { login } = useAuth();
  return (
    <div className="flex justify-center items-center h-screen border bg-gray-500">
      <div className="border border-black bg-white rounded-md p-10">
        <form className="flex flex-col gap-4">
          <h1 className="text-3xl text-black flex justify-center items-center">
            Create an account
          </h1>
          <div>
            <div className="flex flex-col">
              <label htmlFor="fullname">
                Fullname <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your fullname"
                className="border border-black rounded-md w-80 h-8 pl-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">
                Email <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border border-black rounded-md w-80 h-8 pl-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">
                Password <span className="text-red-700">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border border-black rounded-md w-80 h-8 pl-3"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-blue-700 rounded-md hover:bg-blue-950 text-xl font-bold h-10 w-80 p-2">
              Submit
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <span className="font-bold">
              {" "}
              <Link to={"/"}> login</Link>
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
