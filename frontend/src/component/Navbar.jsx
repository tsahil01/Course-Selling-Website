import { useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isLogin } from "../store/atoms/isLoginAtom";
import { useState } from "react";
import { userDetails } from "../store/atoms/userAtom";

export default function Navbar(){
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useRecoilState(isLogin);
    const [userInfo, setUserInfo] = useRecoilState(userDetails);
    if(localStorage.getItem('token')){
        setUserLogin(true)
        setUserInfo(localStorage.getItem('user'))
    }
    
    return<>
        <nav className="py-2 h-16 text-white fixed z-50 top-0 px-4 w-full shadow-2xl bg-zinc-900 border-b border-slate-700 ">
        <div className="flex flex-row justify-between items-center md:mx-auto md:max-w-screen-2xl mx-auto h-full">
            <div className="flex justify-start gap-7">
                <div className="text-xl p-3 font-black hidden md:block">Course Selling Website</div>
                <div className="flex justify-between">
                <button className="text-base px-3 py-2 my-auto hover:bg-slate-700 rounded-md focus:outline-none" onClick={()=>navigate('/')}>
                    Home</button>
                <button className="text-base px-3 py-2 my-auto hover:bg-slate-700 rounded-md focus:outline-none" onClick={()=>navigate('/courses')}>
                    Courses</button>
                </div>
            </div>
            <div className="flex justify-start gap-4">
                {userLogin? <IsLogin/> : <IsNotLogin/>}
            </div>
            </div>
        </nav>
        <div class="h-16 w-full"></div>
    </>
}


function IsLogin() {
  const setUserLogin = useSetRecoilState(isLogin);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = JSON.parse(useRecoilValue(userDetails));

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserLogin(false);
    navigate('/');
  };

  return (
    <>
      <div className="relative">
        <button
          className="text-2xl p-3 m-auto hover:bg-slate-700 rounded-full"
          onClick={toggleDropdown} 
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt- w-48 bg-zinc-700 text-white rounded-2xl shadow-md">
            <button className="block px-4 py-2 hover:bg-gray-600 w-full hover:rounded-2xl text-left">
              <span className="text-bold">Hello, </span>
              <span>{user.firstname} {user.lastname}</span>
            </button>
            <button className="block px-4 py-2 hover:bg-gray-600 w-full hover:rounded-2xl text-left">
              Your Courses
            </button>
            <button className="block px-4 py-2 hover:bg-gray-600 w-full hover:rounded-2xl text-left">
              Settings
            </button>
            <button
              className="block px-4 py-2 hover:bg-gray-600 w-full hover:rounded-2xl text-left"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}



function IsNotLogin(){
    const navigate = useNavigate()
    return<>
        <div className="flex justify-between">
            <button className="text-base px-3 py-2 my-auto hover:bg-slate-700  bg-slate-800 rounded-md focus:outline-none" onClick={()=> navigate('/signin')}>Login</button>
        </div>
    </>
}
