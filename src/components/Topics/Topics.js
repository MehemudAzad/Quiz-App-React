// import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topicsquiz from '../Topicsquiz/Topicsquiz';

const Topics = () => {
    const topics= useLoaderData().data;
    console.log(topics);
    // const [topics, setTopics] = useState([]);
    return (
        <div>
        <Banner></Banner>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-[80%] m-auto gap-7 mt-40 mb-32'>
            {
                topics.map(topic => 
                    <Topicsquiz
                     key={topic.id}
                     topic={topic}></Topicsquiz>
                )
            }
        </div>
        </div>
    );
};

export default Topics;