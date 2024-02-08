import React from 'react';

const Blogs = () => {
    return (
        <div className='w-[90%] m-auto my-20'>
            <h1 className='bg-rose-400 p-4 rounded-lg text-4xl font-semibold mb-10'>Some Useful blogs</h1>
             <div className='border rounded-lg bg-rose-50 my-4 p-4'>
                    <h1 className='text-3xl mb-3'>How does context api work?</h1>
                    <p className='text-gray-500'>Context api helps us avoid props driling. It gives us the opportunity to access some data from anywhere
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux
                    </p>
                </div>
                <div className='bg-rose-50 my-4 rounded-lg p-4'>
                    <h1 className='text-3xl mb-3'>What is the use of useReat?</h1>
                    <p className='text-gray-500'>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

                    If you want to update data and cause a UI update, useState is your Hook. If you need some kind of data container throughout the component's lifecycle without causing render cycles on mutating your variable, then useRef is your solution
                    </p>
                </div>
                <div className=' bg-rose-50 my-4 mb-10 p-4 rounded-lg'>
                    <h1 className='text-3xl mb-3'>What is the purpose of react router?</h1>
                    <p className='text-gray-500'>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

                    At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different Route s as it changes, and it also gives you tools to update the location using Link s and the history API.
                    </p>
                </div>
        </div>
    );
};

export default Blogs;