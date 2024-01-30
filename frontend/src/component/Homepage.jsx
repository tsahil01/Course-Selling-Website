export default function Home(){
    return<>
    <div className="">
        <Navbar/>
    </div>
    </>
}


function Navbar(){
    return<>
        <div className="flex justify-between px-6 py-3 bg-slate-900 text-white shadow-2xl">
            <div className="flex justify-start gap-7">
                <div className="text-2xl p-3 font-black">Course Selling Website</div>
                <div className="flex justify-between">
                <button className="text-lg px-3 py-2 hover:bg-slate-700 rounded-md focus:outline-none font-semibold">Home</button>
                <button className="text-lg px-3 py-2 hover:bg-slate-700 rounded-md focus:outline-none font-semibold">Courses</button>
                </div>
            </div>
            <div className="flex justify-start gap-4">
                <div className="text-2xl p-3 m-auto hover:bg-slate-700 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                </svg>
                </div>
                <div className="flex justify-between">
                <button className="text-lg px-3 py-2 hover:bg-slate-700 rounded-md focus:outline-none font-semibold">Login</button>
                </div>
            </div>
        </div>
    </>
}