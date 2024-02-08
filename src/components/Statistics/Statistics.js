import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topicsstatistics from '../Topics Statistics/Topicsstatistics';

const Statistics = ({cart, setCart}) => {
    const topics = useLoaderData().data;
    console.log(topics)
    return (
        <div>
            {
                topics.map(topic=>
                    <Topicsstatistics topic={topic}></Topicsstatistics>
                    )
            }
        </div>
    );
};

export default Statistics;