import { useState } from "react"

export default function Home(){
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    return<>
    <div className='md:max-w-screen-2xl md:pt-36 pt-20 sm:pb-20 md:pb-10 mx-auto px-4 sm:px-12 text-white'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className="font-bold md:text-5xl text-3xl text-center">
            The Prime Spot for Acquiring Coding Skills!
            </h1>
            <div className='text-sm md:text-xl text-zinc-400 text-center max-w-sm md:max-w-2xl mt-4 md:px-4 px-2'>
            An Entry-Level Haven for Excelling in Coding Proficiency and Unlocking Your Inner Programmer Brilliance! Embark on Your Learning Journey Now and Evolve into a Tech Maestro of the Future!
            </div>
        </div>
        <div className="border border-zinc-800 rounded-lg p-2 bg-zinc-800 md:max-w-6xl mx-auto md:my-20 my-10">
            <img className="rounded-lg" src="../public/headerPic.png" alt="" srcset="" />
        </div>
    </div>
    <div className=" mx-auto border-t border-slate-800 bg-slate-950 py-7">
        <WhiteEle/>
    </div>
    </>
}
     

function WhiteEle(){
    return<>
    <div className="md:py-10 py-5">
        <div className="flex justify-between">
            <div className="w-full flex flex-col md:items-start items-center justify-center px-4 md:px-12">
                <h1 className="font-bold text-white text-center md:text-3xl text-2xl">Courses we offer</h1>
                <div className='text-sm md:text-lg md:py-2 text-zinc-400 text-left mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore repellat et quo incidunt ab. Eius iste quam amet porro excepturi, culpa molestiae hic rem minus eligendi suscipit pariatur temporibus et.
                </div>
                <div className="py-8 text-white font-bold">
                <button className="text-base px-3 py-2 hover:bg-slate-700  bg-slate-400 rounded-md focus:outline-none">Explore Courses Now {">"}</button>
                </div>
            </div>
            <div className="hidden md:block rounded-l-lg py-4 pl-4 bg-zinc-800 md:max-w-6xl md:my-20 my-10">
                <img className="rounded-l-lg" src="https://app.100xdevs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdashboard.9205c79e.png&w=1920&q=75" alt="" srcset="" />
            </div>
        </div>
    </div> 
    </>
}