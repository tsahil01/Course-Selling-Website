import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import { RecoilRoot, useRecoilCallback } from 'recoil';
import Loader from './component/Loader';

const Home = lazy(() => import('./component/Homepage'));
const Courses = lazy(() => import('./component/Courses'));
const SignInPage = lazy(() => import('./component/Signin'));
const SignUpPage = lazy(() => import('./component/Signup'));


const App = () => (
  <RecoilRoot>
    <div className='bg-zinc-950 min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
          <Route path='/courses' element={<Suspense fallback={<Loader />}><Courses /></Suspense>} />
          <Route path="/signin" element={<Suspense fallback={<Loader />}><SignInPage /></Suspense>} />
          <Route path="/signup" element={<Suspense fallback={<Loader />}><SignUpPage /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  </RecoilRoot>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
