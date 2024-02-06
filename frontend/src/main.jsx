import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Homepage';
import Courses from './component/AllCourse';
import Navbar from './component/Navbar';
import SignInPage from './component/Signin';
import SignUpPage from './component/Signup';
import Course from './component/Course';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-zinc-900 min-h-screen'>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/courses">
            <Route path='' element={<Courses />}></Route>
            <Route path=":cname" element = {<Course/>}/>
        </Route>
        <Route path="/signin" element={<SignInPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
    </Routes>
  </BrowserRouter>
  </div>
);

