import AuthFooter from "../Components/Auth/AuthFooter"
import AuthHeader from "../Components/Auth/AuthHeader"
import UpdateUserName from "../Components/UserData/UpdateUserName"

const UpdateUserData = () => {
  return (
    <main className="userProfile h-full">
      <div className="mainContant h-full grid grid-rows-[60px_2fr] ">
        <header>
          <AuthHeader type={""}/>
        </header>
        <div className="Main xl:w-[78vw] h-full flex items-center justify-center lg:w-[80vw] lg:m-auto mx-4">
          <UpdateUserName></UpdateUserName>
        </div>
        <footer>
          <AuthFooter></AuthFooter>
        </footer>
      </div>
    </main>
  )
}

export default UpdateUserData