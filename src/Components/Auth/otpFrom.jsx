import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { verifyOtp } from "../../Store/Reducer/loginRequest.reducer";

const OtpForm = ({ status, error, setStep }) => {
  const dispatch = useDispatch();
  const [otp, setOtpInput] = useState("");
  const navigate = useNavigate();
  const { isOtpVerified } = useSelector((state) => state.loginData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyOtp(otp));
  };

  useEffect(() => {
    if (isOtpVerified) {
      navigate("/");
    }
  }, [isOtpVerified, dispatch]);

  return (
    <section className="w-full ">
      <div className="title w-[18rem] md:w-[22rem] lg:w-[24rem] mb-8 flex-col flex items-start justify-center">
        <h1 className="text-2xl lg:text-[1.8rem] font-extrabold text-white">
          Verify OTP
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[18rem] md:w-[22rem] lg:w-[24rem] flex flex-col gap-4 items-center justify-center"
      >
        <div className="otpInput flex-col flex items-start justify-center gap-2 w-full">
          <label htmlFor="otp" className="text-white font-semibold">
            OTP Code
          </label>
          <input
            type="text"
            name="otp"
            id="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtpInput(e.target.value)}
            className="p-2 w-full hover:border-gray-65 pl-3 transition-all text-white outline-0 bg-gray-08 border border-gray-15 rounded-lg placeholder:text-gray-65"
            required
            readOnly={status === "loading"}
          />
        </div>

        <div className="submit flex flex-col mt-4 items-start justify-center gap-2 w-full">
          <button
            type="submit"
            className="bg-red-45 w-full font-extrabold cursor-pointer text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
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
            ) : (
              "Verify OTP"
            )}
          </button>

          <button
            type="button"
            onClick={() => setStep("signup")}
            className="w-full font-semibold cursor-pointer text-gray-65 hover:text-white px-6 py-2 rounded-lg border border-gray-65 hover:border-white transition-all"
            disabled={status === "loading"}
          >
            Back to Signup
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      </form>
    </section>
  );
};

export default OtpForm;
