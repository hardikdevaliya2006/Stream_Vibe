import AuthFooter from "../Components/Auth/AuthFooter"
import AuthHeader from "../Components/Auth/AuthHeader"

const UpdateUserData = ({ children }) => {
  return (
    <main className="userProfile h-full">
      <div className="mainContant h-full grid grid-rows-[60px_2fr] ">
        <header>
          <AuthHeader type={""}/>
        </header>
        <div className="Main xl:w-[78vw] h-full flex items-center justify-center lg:w-[80vw] lg:m-auto mx-4">
          {children}
        </div>
        <footer>
          <AuthFooter></AuthFooter>
        </footer>
      </div>
    </main>
  )
}

export default UpdateUserData