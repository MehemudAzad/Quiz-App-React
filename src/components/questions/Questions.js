import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Options from '../Options/Options';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({quiz }) => {

    // const notify = () => toast("Wow so easy!");
    // console.log(quiz);
    const {id, options, question, length, correctAnswer} = quiz;

    let correctCart =[];
    let wrongCart = [];

    const handleChecked = (option,id)=>{
        
        console.log(option,id)
        if(option === correctAnswer){
            if(quiz.id=== id){

            }else{
                alert("You have already marked it");
            }
            console.log(quiz);
            toast("Your answer is correct");
        }else{
            toast(`Your answer is incorrect, correct answer is ${correctAnswer}`)
            console.log(quiz)
        
        }
        if(quiz.id=== id){
            // newCart= [...cart , quiz]
        }
    }

    return (
        <div className='border my-4 bg-rose-100 mx-2 rounded' data-aos="fade-up">
           <div>
            <h1 className='mx-auto my-3 w-[96.5%] text-center border bg-blue-300 rounded-lg p-4 font-semibold'>{question}</h1>
           </div>
           <div className='grid grid-cols-1 lg:grid-cols-2'>
            {
                options.map(option =>
                    <Options
                    id={id}
                    correctAnswer={correctAnswer}
                    option={option}
                    key={id}
                    handleChecked={handleChecked}
                    ></Options>
                    )
            }
           </div>
            <div tabIndex={0} className="collapse collapse-arrow bg-rose-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    সঠিক উত্তর দেখুন
                </div>
                <div className="collapse-content"> 
                    <p>{correctAnswer}</p>
                </div>
            </div>
                
            
           
        </div>
    );
};

export default Questions;