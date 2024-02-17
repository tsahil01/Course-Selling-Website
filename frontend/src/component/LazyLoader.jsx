import React from 'react';

export default function LazyLoader() {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-950 text-white p-8'>
      <h1 className='font-bold text-4xl md:text-6xl mb-7'><span className='text-blue-600'>Course selling</span> App</h1>
      <div className="text-blue-400 mt-7 h-20 w-20 md:h-40 md:w-40  animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>
    </div>
  );
}