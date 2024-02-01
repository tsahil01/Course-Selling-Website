import Navbar from "./Navbar";

export default function Courses(){

    return <>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 md:gap-4 sm:p-7 p-4 justify-items-stretch">
            <EachCourse/>
            <EachCourse/>
            <EachCourse/>
            <EachCourse/>
            <EachCourse/>
            <EachCourse/>
            <EachCourse/>
            
        </div>

        </>
}


function EachCourse(){
    return <>
    <div className="flex flex-col bg-slate-800 text-white p-4  rounded-xl">
        <div className="flex justify-center font-extrabold text-2xl">Course Name</div>
        <div className="flex justify-center">Course Description</div>
        <div className="flex justify-center pt-5 font-extrabold"><button className="hover:bg-slate-700 rounded-md p-3">See details</button></div>
    </div>
    </>
}