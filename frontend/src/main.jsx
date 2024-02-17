import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import { RecoilRoot, useRecoilCallback } from 'recoil';
import LazyLoader from './component/LazyLoader';

const Home = lazy(() => import('./component/Homepage'));
const Courses = lazy(() => import('./component/Courses'));
const SignInPage = lazy(() => import('./component/Signin'));
const SignUpPage = lazy(() => import('./component/Signup'));

function Footer() {
  return (
    <footer className="bg-zinc-950 text-white text-center py-4 z-50 bottom-0 w-full">
      Made with <span role="img" aria-label="heart emoji">❤️</span> by  <a href="https://github.com/tsahil01" className="underline">Sahil Tiwakar</a>
    </footer>
  );
}

const App = () => (
  <RecoilRoot>
    <div className='bg-zinc-950 min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Suspense fallback={<LazyLoader />}><Home /></Suspense>} />
          <Route path='/courses' element={<Suspense fallback={<LazyLoader />}><Courses /></Suspense>} />
          <Route path="/signin" element={<Suspense fallback={<LazyLoader />}><SignInPage /></Suspense>} />
          <Route path="/signup" element={<Suspense fallback={<LazyLoader />}><SignUpPage /></Suspense>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  </RecoilRoot>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
