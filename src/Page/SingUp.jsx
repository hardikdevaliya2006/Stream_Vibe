import AuthFooter from "../Components/Auth/AuthFooter";
import AuthForm from "../Components/Auth/AuthForm";
import AuthHeader from "../Components/Auth/AuthHeader";

const SingUp = () => {
  return ( 
    <main className="grid grid-rows-[70px_1fr_5px] singUp h-[97%]">
      <header>
        <AuthHeader type={"Login"} ></AuthHeader>
      </header>
      <div className="main">
        <AuthForm></AuthForm>
      </div>
      <footer>
          <AuthFooter></AuthFooter>
      </footer>
    </main>
  );
};

export default SingUp;
