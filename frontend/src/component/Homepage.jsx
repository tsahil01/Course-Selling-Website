import { useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom"


export default function Home(){
    const [isLoading, setIsLoading] = useState(true)
    return<>
    <div className='md:max-w-screen-2xl md:pt-36 pt-20 sm:pb-20 md:pb-10 mx-auto px-4 sm:px-12 text-white'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className="font-bold md:text-5xl text-3xl text-center">
            The Prime Spot for Acquiring <span className="text-blue-600">Coding Skills!</span>
            </h1>
            <div className='text-sm md:text-xl text-zinc-400 text-center max-w-sm md:max-w-2xl mt-4 md:px-4 px-2'>
            An Entry-Level Haven for Excelling in Coding Proficiency and Unlocking Your Inner Programmer Brilliance! Embark on Your Learning Journey Now and Evolve into a Tech Maestro of the Future!
            </div>
        </div>
        <div className="border border-zinc-800 rounded-lg p-2 bg-zinc-800 md:max-w-6xl mx-auto md:my-20 my-10">
            <img className="rounded-lg" src="../public/headerPic.png" alt="" srcset=""/>
        </div>
    </div>
    <div className="  bg-slate-950 pt-7">
        <WhiteEle/>
    </div>
    </>
}
     

function WhiteEle(){
    const navigate = useNavigate()
    return<>
    <div className="md:py-10 py-5">
        <div className="flex justify-between">
            <div className="w-full flex flex-col md:items-start items-center justify-center px-4 md:px-12">
                <h1 className="font-bold text-white text-center md:text-3xl text-3xl pb-6">Courses Offerings</h1>
                <div className='text-sm md:text-lg md:py-2 text-zinc-300 text-left mt-2  bg-zinc-800 p-3 rounded-md'>
                Embark on a journey of knowledge and discovery with our captivating array of courses that transcend the ordinary. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delve into the realms of creativity, innovation, and expertise as you immerse yourself in a learning experience like no other.
                </div>
                <div className="py-8 text-white font-bold">
                <button className="text-base px-3 py-2 hover:bg-blue-700  bg-blue-900 rounded-md focus:outline-none" onClick={()=>{
                    navigate('/Courses')
                }}>Explore Courses Now {">"}</button>
                </div>
            </div>
            <div className="hidden md:block rounded-l-lg py-4 pl-4 bg-zinc-800 md:max-w-6xl md:my-20 my-10">
                <img className="rounded-l-lg" src="../public/abc.png" alt="" srcset=""/>
            </div>
        </div>
    </div> 
    </>
}