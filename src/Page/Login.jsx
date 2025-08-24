import AuthFooter from "../Components/Auth/AuthFooter";
import AuthHeader from "../Components/Auth/AuthHeader";
import LoginFrom from "../Components/Auth/LoginFrom";

const SingUp = () => {
  return ( 
    <main className="grid grid-rows-[70px_1fr_5px] singUp h-[97%]">
      <header>
        <AuthHeader type={"Singup"} ></AuthHeader>
      </header>
      <div className="main">
        <LoginFrom></LoginFrom>
      </div>
      <footer>
          <AuthFooter></AuthFooter>
      </footer>
    </main>
  );
};

export default SingUp;
