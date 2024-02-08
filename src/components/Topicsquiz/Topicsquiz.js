import React from 'react';
import { Link } from 'react-router-dom';

const Topicsquiz = ({topic}) => {
    console.log(topic)
    const {logo, name, total, id} = topic;
    return ( 
        <div className='border bg-rose-100 rounded-md p-1 data'data-aos="zoom-in">
                <div>
                    <img className='w-full mb-2' src={logo} alt="" />
                    <div className='flex justify-between'>
                        <p className='font-semibold text-rose-600 bg-white px-1 rounded'>{name}</p>
                        <p className='font-semibold text-rose-600'>{total}Q</p>
                        <button className='bg-rose-400 px-1 rounded'><Link topic={topic} to={`/quiz/${id}`}>Start Practice</Link> </button>
                    </div>
                </div>
                
        </div>
    );
};

export default Topicsquiz;