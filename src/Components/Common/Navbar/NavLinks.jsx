import { NavLink } from "react-router";

const NavLinks = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-white bg-gray-10 rounded-md px-2.5 py-1.5"
            : "p-2 text-gray-75"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/Movies-Shows"}
        className={({ isActive }) =>
          isActive
            ? "text-white bg-gray-10 rounded-xl px-2.5 py-1.5"
            : "p-2 text-gray-75"
        }
      >
        Movies & Shows
      </NavLink>
      <NavLink
        to={"/Support"}
        className={({ isActive }) =>
          isActive
            ? "text-white bg-gray-10 rounded-md px-2.5 py-1.5"
            : "p-2 text-gray-75"
        }
      >
        Support
      </NavLink>
      <NavLink
        to={"/Subscriptions"}
        className={({ isActive }) =>
          isActive
            ? "text-white bg-gray-10 rounded-md px-2.5 py-1.5"
            : "p-2 text-gray-75"
        }
      >
        Subscriptions
      </NavLink>
    </>
  );
};

export default NavLinks;
