import React from 'react';

const Topicsstatistics = ({topic}) => {
    const {id, logo,  name, total} = topic;
    return (
        <div className='w-[80%] m-auto bg-rose-50 my-16 rounded-xl p-2' data-aos="fade-up  ">  
            <div className='shadow-xl flex items-center gap-2 md:gap-10'>
                <img className='w-52' src={logo} alt="hello" />
                <div className='text-[2.5xl] bg-rose-100 w-[75%]'>
                    <p className='bg-rose-200 my-1 rounded-lg p-2 text-purple-700 '>Total Questions: {total}</p>
                    <p className='bg-rose-200 my-1 rounded-lg p-2 text-purple-700 '>Answered attempted:</p>
                    <p className='bg-rose-200 my-1 rounded-lg p-2 text-green-600' >Answered correctly:</p>
                    <p className='bg-rose-200 my-1 rounded-lg p-2 text-rose-600'>Answered wrong:</p>
                </div>
            </div>
        </div>
    );
};

export default Topicsstatistics;