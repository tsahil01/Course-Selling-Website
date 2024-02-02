import { useRecoilState } from "recoil";
import EachCourse from "./EachCourse";
import { isLogin } from "../store/atoms/isLoginAtom";

export default function Courses(){
    const isLogin = useRecoilState(isLogin)
    return <>
        {isLogin? <YourCourses/>: <></>}
        <AllCourses/>
        </>
}

function YourCourses(){
    return<>
        <div className='p-10 sm:px-12'>
            <div className='font-bold text-2xl'>Your Courses</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 md:gap-4 sm:p-7 p-4 justify-items-stretch">
                <EachCourse/>
                <EachCourse/>
                <EachCourse/>
                <EachCourse/>
                <EachCourse/>
            </div>
        </div>
    </>
}


function AllCourses(){
    return<>
        <div className='p-10 sm:px-12'>
            <div className='font-bold text-2xl'>All Courses</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 md:gap-4 sm:p-7 p-4 justify-items-stretch">
                <EachCourse/>
                <EachCourse/>
                <EachCourse/>
                <EachCourse/>
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