import { useNavigate } from "react-router-dom"

export default function Navbar(){
    const navigate = useNavigate()
    const userLogin = false;
    return<>
        <nav className="py-2 h-16 text-white fixed z-50 top-0 px-4 w-full border-b">
            <div className="flex justify-between md:mx-auto md:max-w-screen-2xl mx-auto items-center">
            <div className="flex justify-start gap-7">
                <div className="text-xl p-3 font-black hidden md:block">Course Selling Website</div>
                <div className="flex justify-between">
                <button className="text-base px-2 hover:bg-slate-700 rounded-md focus:outline-none" onClick={()=>navigate('/')}>
                    Home</button>
                <button className="text-base px-2 hover:bg-slate-700 rounded-md focus:outline-none" onClick={()=>navigate('/courses')}>
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

function IsLogin(){
    const navigate = useNavigate()
    return<>
        <button className="text-2xl p-3 m-auto hover:bg-slate-700 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
            </svg>
        </button>
        <div className="flex justify-between">
            <button className="text-base px-2 hover:bg-slate-700 bg-slate-800 rounded-md focus:outline-none">Logout</button>
        </div>
    </>
}

function IsNotLogin(){
    const navigate = useNavigate()
    return<>
        <div className="flex justify-between">
            <button className="text-base px-3 py-2 hover:bg-slate-700  bg-slate-800 rounded-md focus:outline-none" onClick={()=> navigate('/signin')}>Login</button>
        </div>
    </>
}
