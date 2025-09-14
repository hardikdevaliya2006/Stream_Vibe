import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { sendRequestToChangeUserName } from "../../Store/Actions/sendRequestToChangeUserName.action";

const UpdateUserName = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const { flag, isUpdating, error } = useSelector(
    (state) => state.updateUsername
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendRequestToChangeUserName({ name: newName }));
  };

  useEffect(() => {
    if (flag?.message === "User updated") {
      navigate("/");
    }
  }, [flag, navigate]);
  return (
    <section>
      <div className="title w-[18rem] md:w-[22rem] lg:w-[24rem] mb-8 flex-col flex items-start justify-center">
        <h1 className="text-2xl lg:text-[1.8rem] font-extrabold text-white">
          Change Name
        </h1>
        <p className="text-gray-65">
          Change your name anytime. Your profile will update instantly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[18rem] md:w-[22rem] lg:w-[24rem] flex flex-col gap-4 items-center justify-center"
      >
        <div className="otpInput flex-col flex items-start justify-center gap-2 w-full">
          <label htmlFor="otp" className="text-white font-semibold">
            Name
          </label>
          <input
            type="text"
            name="otp"
            id="otp"
            placeholder="New Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="p-2 w-full hover:border-gray-65 pl-3 transition-all text-white outline-0 bg-gray-08 border border-gray-15 rounded-lg placeholder:text-gray-65"
            required
            readOnly={isUpdating === true}
          />
        </div>

        <div className="submit flex flex-col mt-4 items-start justify-center gap-2 w-full">
          <button
            type="submit"
            className="bg-red-45 w-full font-extrabold cursor-pointer text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isUpdating === true}
          >
            {isUpdating === true ? (
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
              "Save Changes"
            )}
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      </form>
    </section>
  );
};

export default UpdateUserName;
