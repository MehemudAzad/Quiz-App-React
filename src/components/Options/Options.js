import React from 'react';

const Options = ({option, handleChecked, correctAnswer,id}) => {
    console.log(option);
    // const disable =
    return (
        <div className='border my-4 bg-rose-300 rounded-md p-3 w-[93%] m-auto'>
            
            <div className="form-control">
            <label className="cursor-pointer label">
                <span className="label-text">{option}</span>
                <input onClick={()=>handleChecked(option,id)} type="checkbox"  className={`checkbox  ${option ===correctAnswer ? `checkbox-accent`:`checkbox-warning`}`}/>
            </label>
            </div>
         
        </div>
    );
};

export default Options;