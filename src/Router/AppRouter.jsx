import { Route, Routes } from 'react-router'
import Home from '../Page/Home'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home></Home>} />
    </Routes>
  )
}

export default AppRouter