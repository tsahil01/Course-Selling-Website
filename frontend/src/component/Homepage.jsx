import EachCourse from './EachCourse';

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
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-1 sm:gap-2 md:gap-4 sm:p-7 p-4 justify-center">
        <EachCourse/>
        <EachCourse/>
        <EachCourse/>
    </div>
</>
}


