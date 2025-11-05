import { useNavigate } from "react-router";
import UpdateUserData from "../../Page/UpdateUserData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import requestOTP from "../../Store/Actions/sendRequestToGetOTP.action";
import { requestResetPassword } from "../../Store/Actions/sendRequestResetPassword.action";
import {
  resetState,
  setEmail,
} from "../../Store/Reducer/forgotPasswordSlice.reducer";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { email, loading, message, error, otpSent, success } = useSelector(
    (state) => state.forgotPassword
  );

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    await dispatch(requestOTP(email));
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.trim().length > 0) setStep(3);
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    await dispatch(requestResetPassword({ email, otp, newPassword }));
  };

  useEffect(() => {
    if (otpSent) {
      setStep(2); // Move to OTP step
    }
    if (success) {
      navigate("/");
      dispatch(resetState());
    }
  }, [otpSent, success, navigate]);

  return (
    <UpdateUserData>
      <section>
        <div className="title w-[18rem] md:w-[22rem] lg:w-[24rem] mb-8 flex-col flex items-start justify-center">
          <h1 className="text-2xl lg:text-[1.8rem] font-extrabold text-white">
            {step === 1 && "Forgot Password"}
            {step === 2 && "Verify OTP"}
            {step === 3 && "Set New Password"}
          </h1>
          <p className="subTitle text-gray-65">
            {step === 1 && "Enter your email to receive an OTP."}
            {step === 2 && "Enter the OTP we sent to your email."}
            {step === 3 && "Enter your new password below."}
          </p>
        </div>
        {step === 1 && (
          <form
            onSubmit={handleEmailSubmit}
            className="w-full flex flex-col gap-4 items-center justify-center"
          >
            <div className="emailInput flex-col flex items-start justify-center gap-2 w-full">
              <label htmlFor="email" className="text-white font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="jhon@gmail.com"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                className="p-2 w-full hover:border-gray-65 pl-3 transition-all text-white outline-0 bg-gray-08 border border-gray-15 rounded-lg placeholder:text-gray-65"
                required
              />
            </div>

            <div className="submit flex flex-col mt-4 items-start justify-center gap-2 w-full">
              <button
                type="submit"
                className="bg-red-45 w-full font-extrabold cursor-pointer text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading === true}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form
            onSubmit={handleOtpSubmit}
            className="w-full flex flex-col gap-4 items-center justify-center"
          >
            <div className="otpInput flex-col flex items-start justify-center gap-2 w-full">
              <label htmlFor="otp" className="text-white font-semibold">
                OTP
              </label>
              <input
                type="text"
                name="otp"
                id="otp"
                placeholder="XXXXXX"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="p-2 w-full hover:border-gray-65 pl-3 transition-all text-white outline-0 bg-gray-08 border border-gray-15 rounded-lg placeholder:text-gray-65"
                required
              />
            </div>

            <div className="submit flex flex-col mt-4 items-start justify-center gap-2 w-full">
              <button
                type="submit"
                className="bg-red-45 w-full font-extrabold cursor-pointer text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading === true}
              >
                Verify OTP
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form
            onSubmit={handlePasswordSubmit}
            className="w-full flex flex-col gap-4 items-center justify-center"
          >
            <div className="passwordInput flex-col flex items-start justify-center gap-2 w-full">
              <label htmlFor="password" className="text-white font-semibold">
                Enter New Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="p-2 w-full hover:border-gray-65 pl-3 transition-all text-white outline-0 bg-gray-08 border border-gray-15 rounded-lg placeholder:text-gray-65"
                required
              />
            </div>

            <div className="submit flex flex-col mt-4 items-start justify-center gap-2 w-full">
              <button
                type="submit"
                className="bg-red-45 w-full font-extrabold cursor-pointer text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading === true}
              >
                {loading ? "Updating..." : "Reset Password"}
              </button>
            </div>
          </form>
        )}

        {message && (
          <p className="text-sm mt-4 text-center text-gray-65">{message}</p>
        )}
      </section>
    </UpdateUserData>
  );
};

export default ForgotPassword;
