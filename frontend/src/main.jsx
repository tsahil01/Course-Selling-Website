import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Homepage';
import Navbar from './component/Navbar';
import SignInPage from './component/Signin';
import SignUpPage from './component/Signup';
import Courses from './component/Courses';  
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
  <div className='bg-zinc-950 min-h-screen'>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/courses">
            <Route path='' element={<Courses />}></Route>
        </Route>
        <Route path="/signin" element={<SignInPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
    </Routes>
  </BrowserRouter>
  </div>
  </RecoilRoot>
);

