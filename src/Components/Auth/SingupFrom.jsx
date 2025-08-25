import { useDispatch } from "react-redux";
import { sendRequestCreateUser } from "../../Store/Actions/sendRequestCreateUser.action";
import emailjs from "@emailjs/browser";
import { Link } from "react-router";
import { setOtp } from "../../Store/Reducer/loginRequest.reducer";

const SingupFrom = ({ status, setFrom, fromData, setStep }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFrom({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(sendRequestCreateUser(fromData));
    if (response.meta.requestStatus === "fulfilled") {
      await sendOtp();
      setStep("otp"); // This will trigger the slide animation
    }
  };

  const sendOtp = async () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    dispatch(setOtp(otp));

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          email: fromData.email,
          passcode: otp,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("✅ OTP Sent:", otp);
    } catch (error) {
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section>
      <div className="title w-[18rem] md:w-[22rem] lg:w-[24rem] mb-8 flex-col flex items-start justify-center">
        <h1 className="text-2xl lg:text-[1.8rem] font-extrabold text-white">
          Singup
        </h1>
        <Link to={"/login"} className="text-gray-65">
          Or Have account then login
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[18rem] md:w-[22rem] lg:w-[24rem] flex-col items-center justify-center flex gap-4"
      >
        <div className="nameInput flex-col flex items-start justify-center gap-2">
          <label htmlFor="name" className="text-white font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Jhon Snow"
            value={fromData.name}
            onChange={handleChange}
            className="p-2 w-[18rem] md:w-[22rem] lg:w-[24rem] hover:border-gray-65 pl-3 transition-all text-white outline-0 bg-gray-08 border border-gray-15 rounded-lg placeholder:text-gray-65"
            required
            readOnly={status === "loading"}
          />
        </div>
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
        <div className="submit flex flex-col mt-4 items-start justify-center gap-4">
          <div className="checkBox flex items-start justify-center gap-2">
            <label
              htmlFor="checkbox"
              className="text-gray-65 flex gap-2 items-start"
            >
              <input
                type="checkbox"
                id="checkBox"
                className="w-4 h-4 mt-1 accent-red-500"
              />
              Allow to send me OTP at my register Mail
            </label>
          </div>
          <button
            type="submit"
            className="bg-red-45 md:w-[22rem] lg:w-[24rem] w-[18rem] font-extrabold cursor-pointer text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === "loading"}
          >
            {status == "loading" ? (
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
              "Signup"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default SingupFrom;
