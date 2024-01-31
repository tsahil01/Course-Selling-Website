import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './component/Homepage'
import Courses from './component/Course'
import Navbar from './component/Navbar'

export default function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/courses' element = {<Courses/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
    
  )
}