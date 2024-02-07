export default function Courses(){
    return<>
    <div className="p-10 text-white md:max-w-screen-2xl mx-auto">
    <h1 className="font-bold text-white text-center md:text-3xl text-3xl pb-6">Courses Offerings:</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-3 md:mt-7">  
        <EachCourse/>          
        <EachCourse/>          
        <EachCourse/>          
        <EachCourse/>          
        <EachCourse/>          
        <EachCourse/>          
        <EachCourse/>          
        <EachCourse/>          
        </div>
    </div>
    </>
}

function EachCourse(){
    return <>
    <div className="border border-zinc-700 rounded-xl p-4 w-full flex flex-col bg-zinc-950">
    <div className="text-2xl font-bold text-center mb-5">WebDevlopment</div>
    <div className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cum?</div>
    <div className="pt-8 text-center text-white font-bold">
    <button className="text-base px-3 py-2 hover:bg-blue-700  bg-blue-900 rounded-md focus:outline-none">Join Now</button>
    </div>
</div>
    </>
}