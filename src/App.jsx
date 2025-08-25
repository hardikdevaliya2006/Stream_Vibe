import { Toaster } from "react-hot-toast";
import AppRouter from "./Router/AppRouter";

const App = () => {
  return (
    <>
      <AppRouter></AppRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default App
