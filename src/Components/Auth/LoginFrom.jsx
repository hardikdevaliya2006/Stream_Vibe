import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendRequestloginUser } from "../../Store/Actions/sendRequestloginUser.action";
import { Link, useNavigate } from "react-router";

const LoginFrom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => {
    return state.loginData;
  });

  const [fromData, setFrom] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFrom({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendRequestloginUser(fromData));
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate, status]);

  return (
    <section className="flex items-center justify-center w-full h-[90%] flex-col">
        <div className="title w-[18rem] md:w-[22rem] lg:w-[24rem] mb-4 flex-col flex items-start justify-center">
          <h1 className="text-2xl lg:text-[1.8rem] font-extrabold text-white">
            Login
          </h1>
          <p className="text-gray-65">Or register for an account</p>
        </div>
      <form
        onSubmit={handleSubmit}
        className="w-[18rem] md:w-[22rem] lg:w-[24rem] flex-col items-center justify-center flex gap-4"
      >
        <div className="emmailInput flex-col flex items-start justify-center gap-2">
          <label htmlFor="email" className="text-white font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@domain.com"
            value={fromData.email}
            onChange={handleChange}
            className="p-2 w-[18rem] md:w-[22rem] lg:w-[24rem] hover:border-gray-65 pl-3 transition-all text-white outline-0 bg-gray-08 border border-gray-15 rounded-lg placeholder:text-gray-65"
            required
            readOnly={status === "loading"}
          />
        </div>
        <div className="password flex-col flex items-start justify-center gap-2">
          <label htmlFor="password" className="text-white font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={fromData.password}
            onChange={handleChange}
            className="p-2 w-[18rem] md:w-[22rem] lg:w-[24rem] hover:border-gray-65 pl-3 transition-all text-white outline-0 bg-gray-08 border border-gray-15 rounded-lg placeholder:text-gray-65"
            required
            readOnly={status === "loading"}
          />
        </div>
        <div className="submit flex flex-col mt-4 items-center justify-center gap-2">
          <button
            type="submit"
            className="bg-red-45 md:w-[22rem] lg:w-[24rem] w-[18rem] font-extrabold cursor-pointer text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <svg
                  className="w-5 h-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              </>
            ) : (
              "Login"
            )}
          </button>
          <Link
            to={"/singup"}
            className="text-center hover:underline text-gray-65 text-sm"
          >
            Forget your password?
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginFrom;
