import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import SingupFrom from "./singupFrom";
import OtpForm from "./otpFrom";
import { Link } from "react-router";

const AuthForm = () => {
  const { status, error } = useSelector((state) => state.loginData);
  const [fromData, setFrom] = useState({ name: "", email: "", password: "" });
  const [step, setStep] = useState("signup"); // "signup" or "otp"

  return (
    <section className="flex items-center justify-center w-full h-[90%] flex-col">
      {/* <div className="title w-[18rem] md:w-[22rem] lg:w-[24rem] mb-4 flex-col flex items-start justify-center">
        <h1 className="text-2xl lg:text-[1.8rem] font-extrabold text-white">
          {step === "signup" ? "Signup" : "Verify OTP"}
        </h1>
        <Link to={"/login"} className="text-gray-65">
          Or Have account then login
        </Link>
      </div> */}

      <div className="relative w-[18rem] md:w-[22rem] lg:w-[24rem] overflow-hidden">
        <motion.div
          className="flex w-[200%]"
          animate={{
            x: step === "signup" ? "0%" : "-50%",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="w-1/2 flex justify-center items-center">
            <SingupFrom
              status={status}
              setFrom={setFrom}
              fromData={fromData}
              error={error}
              setStep={setStep}
            />
          </div>

          <div className="w-1/2 flex justify-center items-center">
            <OtpForm
              status={status}
              fromData={fromData}
              error={error}
              setStep={setStep}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthForm;
