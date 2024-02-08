import { useEffect, useState } from "react"
import { BACKENDURL } from "../../shared/urls"
import Loader from "./Loader"

export default function Courses(){
    const [course, setCourse] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(async ()=>{
        const res = await fetch(`${BACKENDURL}/course/allcourse`);
        const data = await res.json()
        console.log(data.courses)
        if(data.courses){
            setCourse(data.courses);
            setLoading(false)
        } else {
            alert(data)
        }

        return ()=>{}
    }, [])

    return<>
    <div className="p-10 text-white md:max-w-screen-2xl mx-auto">
    <h1 className="font-bold text-white text-center md:text-3xl text-3xl pb-6">Courses Offerings:</h1>
        
        {loading? <Loader/> : 
            <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-4 md:mt-7">  
            {course.map((data)=>{
                return <EachCourse title={data.title} key={data.course_id} description={data.description} price={data.price}/>
            })}
            </div>
        }

    </div>
    </>
}

function EachCourse({title, description, price}){
    return <>
    <div className="border border-zinc-700 rounded-xl p-4 w-full flex flex-col bg-zinc-900">
    <div className="text-2xl font-bold text-center mb-5">{title}</div>
    <div className="text-center">{description}</div>
    <div className="pt-8 text-center text-white font-bold">
    <button className="text-base px-3 py-2 hover:bg-blue-700  bg-blue-900 rounded-md focus:outline-none">Join Now at ${price}</button>
    </div>
</div>
    </>
}