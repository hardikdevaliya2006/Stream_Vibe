import AuthFooter from "../Components/Auth/AuthFooter";
import AuthHeader from "../Components/Auth/AuthHeader";
import SingupFrom from "../Components/Auth/SingupFrom";

const SingUp = () => {
  return ( 
    <main className="grid grid-rows-[70px_1fr_5px] singUp h-[97%]">
      <header>
        <AuthHeader type={"Login"} ></AuthHeader>
      </header>
      <div className="main">
        <SingupFrom></SingupFrom>
      </div>
      <footer>
          <AuthFooter></AuthFooter>
      </footer>
    </main>
  );
};

export default SingUp;
