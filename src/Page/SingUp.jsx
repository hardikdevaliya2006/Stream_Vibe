import AuthFooter from "../Components/Auth/AuthFooter";
import AuthHeader from "../Components/Auth/AuthHeader";

const SingUp = () => {
  return ( 
    <main className="grid grid-rows-[70px_1fr_5px] singUp h-[97%]">
      <header>
        <AuthHeader></AuthHeader>
      </header>
      <div className="main"></div>
      <footer>
          <AuthFooter></AuthFooter>
      </footer>
    </main>
  );
};

export default SingUp;
