import EachCourse from './EachCourse';

export default function Home(){
    
    return<>
    <div className='md:max-w-screen-2xl md:pt-36 pt-10 mx-auto px-4 sm:px-12 text-white'>
        <div className='flex justify-center'>
            <h1 className="font-bold md:text-5xl text-3xl text-center ">
                The Best Place To Learn Code!
            </h1>
        </div>
    </div>
    </>
}

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


