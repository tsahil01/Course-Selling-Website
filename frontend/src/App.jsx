import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './component/Homepage'
import Courses from './component/Course'
import Navbar from './component/Navbar'
import Loader from './component/Loader'
import SignInPage from './component/Signin'
import SignUpPage from './component/Signup'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route loader={<Loader/>} path='/' element = {<Home/>}></Route>
        <Route path='/courses' element = {<Courses/>}></Route>
        <Route path='/signin' element = {<SignInPage/>}></Route>
        <Route path='/signup' element = {<SignUpPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
    
  )
}