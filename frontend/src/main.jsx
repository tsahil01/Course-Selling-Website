import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Homepage';
import Courses from './component/Course';
import Navbar from './component/Navbar';
import Loader from './component/Loader';
import SignInPage from './component/Signin';
import SignUpPage from './component/Signup';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      ></Route>
      
      <Route
        path="/courses"
        element={
          <>
            <Navbar />
            <Courses />
          </>
        }
      ></Route>
      <Route path="/signin" element={<SignInPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
    </Routes>
  </BrowserRouter>
);

