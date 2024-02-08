import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Questions from '../components/questions/Questions';
import Toast from '../components/Toast/Toast';

const Quiz = ({topic,cart, setCart}) => {
    console.log(topic)
    const quizs = useLoaderData().data;
    console.log(quizs);
    // console.log(quizs.questions);
    return (
        <div className='mt-12 mb-20 m-auto w-[90%] md:w-[80%] xl:w-[70%] lg:w-[75%]'>
            <h1 className='text-5xl text-center bg-rose-500 shadow-xl rounded-2xl p-1 w-[100%] m-auto mb-10'>Quiz of {quizs.name}</h1>
            {
                quizs.questions.map(quiz =>
                    <Questions
                    key={quiz.id}
                    cart={cart}
                    setCart={setCart}
                    quiz={quiz}></Questions>
                )
            }
            <ToastContainer></ToastContainer>
            {/* <Toast></Toast> */}
        </div>
    );
};

export default Quiz;