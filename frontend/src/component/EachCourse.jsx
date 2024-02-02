

export default function EachCourse(){
    return <>
    <div className="flex flex-col bg-slate-800 text-white p-4 rounded-xl">
        <div className="flex justify-center font-extrabold md:text-5xl text-3xl md:pb-10">Course Name</div>
        <div className="flex justify-center">Course Description</div>
        <div className="flex justify-center pt-1 font-extrabold"><button className="hover:bg-slate-600 bg-slate-700 rounded-md p-3">See details</button></div>
    </div>
    </>
}