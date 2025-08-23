import { useState } from "react";
import SecationHeader from "../Common/Secation-Header/SecationHeader";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const countries = [
  { code: "in" },
  { code: "us" },
  { code: "gb" },
  { code: "fr" },
  { code: "de" },
  { code: "jp" },
  { code: "cn" },
  { code: "br" },
  { code: "za" },
];

const SupportFromWrap = () => {
  const [selected, setSelected] = useState(countries[0]);
  const [open, setOpen] = useState(false);

  return (
    <section className="SupportFromWrap pb-4 my-10">
      <div className="flex w-full">
        <div className="HeaderText w-full">
          <SecationHeader
            mainText={"Welcome to our support page!"}
            subText={
              "We're here to help you with any problems you may be having with our product."
            }
          />
        </div>
      </div>
      <div className="SupportSecation md:flex-row flex gap-4 flex-col mt-5">
        <div className="img border-2 overflow-hidden lg:max-h-114 md:w-[35%] rounded-lg border-gray-15">
          <img src="/img/fromImg.png" alt="fromimg" className="object-cover h-full 220 w-full" />
        </div>
        <div className="from w-full md:w-[65%] flex flex-col gap-4 border-2 p-4 rounded-lg bg-gray-06 border-gray-15">
          <div className="FirstAndLasName flex lg:flex-row gap-4 flex-col items-start justify-center">
            <div className="firstName w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="firstName" className="text-white">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter First Name"
                className="p-2 text-gray-65 outline-0 bg-gray-08 border border-gray-15 w-full rounded-md placeholder:text-gray-65"
              />
            </div>
            <div className="lastName text-white w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="lastName" className="text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name"
                className="p-2 text-gray-65 outline-0 bg-gray-08 border border-gray-15 w-full rounded-md placeholder:text-gray-65"
              />
            </div>
          </div>
          <div className="moAndEmail flex gap-4 lg:flex-row flex-col items-start justify-center">
            <div className="email text-white w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="p-2 text-gray-65 outline-0 bg-gray-08 border border-gray-15 w-full rounded-md placeholder:text-gray-65"
              />
            </div>
            <div className="mobile w-full flex-col flex items-start justify-center gap-2">
              <label htmlFor="phone" className="text-white">
                Phone Number
              </label>
              <div className="flex w-full items-center gap-2">
                <div className="relative border border-gray-15 rounded-md bg-gray-08 inline-block w-fit">
                  <button
                    className="flex items-center w-15 justify-center gap-1 rounded-md bg-gray-08 px-2 py-3"
                    onClick={() => setOpen(!open)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w40/${selected.code}.png`}
                        alt={selected.name}
                        className="h-4"
                      />
                    </div>
                    <span className="text-gray-500">
                      {open ? (
                        <IoIosArrowUp></IoIosArrowUp>
                      ) : (
                        <IoIosArrowDown></IoIosArrowDown>
                      )}
                    </span>
                  </button>

                  {open && (
                    <ul className="absolute bg-gray-08 items-center justify-center border mt-1  w-full rounded-md max-h-60 overflow-y-auto z-10">
                      {countries.map((c) => (
                        <li
                          key={c.code}
                          onClick={() => {
                            setSelected(c);
                            setOpen(false);
                          }}
                          className="flex items-center justify-center gap-2 p-2 cursor-pointer"
                        >
                          <img
                            src={`https://flagcdn.com/w40/${c.code}.png`}
                            alt={c.name}
                            className=""
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="mobile w-full text-white flex flex-col items-start justify-center gap-2">
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter Phone Number"
                    className="p-2 w-full outline-0 text-gray-65 bg-gray-08 border border-gray-15 rounded-md placeholder:text-gray-65"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="LOngMessage">
            <label htmlFor="message">
              <textarea
                placeholder="Enter your Mesage"
                rows={5}
                className="p-2 outline-0 text-gray-65 bg-gray-08 border border-gray-15 w-full rounded-md placeholder:text-gray-65"
              />
            </label>
          </div>
          <div className="checkAndSubmit flex-col items-start justify-center w-full flex gap-4">
            <div className="checkBox flex items-start justify-center gap-2">
              <label
                htmlFor="checkbox"
                className="text-gray-65 flex gap-2 items-start"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 accent-red-500"
                />
                <p>I agree with Terms of Use and Privacy Policy</p>
              </label>
            </div>
            <div className="submit w-full">
              <input
                type="submit"
                value={"Send Message"}
                className="bg-red-45 text-white w-full p-2 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportFromWrap;
