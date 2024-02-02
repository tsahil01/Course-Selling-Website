import { Carousel } from 'flowbite-react';

export default function Home(){
    return<>
    <div className='p-10 sm:px-12'>
        <div className='font-black md:text-6xl text-4xl text-slate-900 py-5 text-center m-auto sm:mb-9'>
            {taglines[Math.floor(Math.random() * taglines.length)]}
        </div>
        <Featured/>
        
    </div>
    </>
}


const taglines = [
    "Elevate Your Expertise: Transformative Courses for Every Journey.",
    "Knowledge Unleashed: Explore, Learn, Succeed.",
    "Ignite Your Learning Adventure: Courses that Inspire, Skills that Propel.",
    "Master Your Potential: Where Education Meets Excellence.",
    "Unlock Your Brilliance: Dive into a Sea of Possibilities.",
    "Educate, Elevate, Excel: Your Path to Success Starts Here.",
    "Infinite Wisdom, Infinite Growth: Your Gateway to Skill Mastery.",
    "Chart Your Course: Unleash Your Potential, Enrich Your Mind.",
    "Learning Beyond Limits: Explore, Discover, Conquer.",
    "Fuel Your Passion, Shape Your Future: Courses Tailored for Success."
  ];


function Featured(){
return<>
    <div className='font-bold text-2xl'>Featured</div>
    <div className="grid md:grid-cols-3 gap-4 sm:gap-2 md:gap-4 sm:p-7 p-4 justify-items-stretch">
        <EachCourse/>
        <EachCourse/>
        <EachCourse/>
    </div>
</>
}



function EachCourse(){
return <>
<div className="flex flex-col bg-slate-800 text-white p-4 rounded-xl">
    <div className="flex justify-center font-extrabold text-2xl">Course Name</div>
    <div className="flex justify-center">Course Description</div>
    <div className="flex justify-center pt-5 font-extrabold"><button className="hover:bg-slate-700 rounded-md p-3">See details</button></div>
</div>
</>
}