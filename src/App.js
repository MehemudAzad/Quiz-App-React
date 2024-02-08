import './App.css';
// import Navbar from './components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Error from './components/Error/Error';
import Blogs from './components/Blogs/Blogs';
// import Topicsquiz from './components/Topicsquiz/Topicsquiz';
import Quiz from './Quiz/Quiz';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";


function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])

  const [correctCart, setCorrectCart] = useState([]);
  const [wrongCart, setWrongCart] = useState([]);
  const [cart, setCart] = useState([]);
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/quiz',
          loader: async()=>{
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element:<Topics></Topics>
        },
        {
          path:'quiz/:id',
          loader: async({params})=>{
            console.log(params.id)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          } ,
          element:<Quiz correctCart={correctCart} setCorrectCart={setCorrectCart} wrongCart={wrongCart} setWrongCart={setWrongCart}></Quiz>   
        },
        {
          path:'/statistics',
          loader: async()=>{
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element:<Statistics correctCart={correctCart} setCorrectCart={setCorrectCart} wrongCart={wrongCart} setWrongCart={setWrongCart}></Statistics>,
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        }   
      ]
      },
        {
          path:'*',
          element:<Error></Error>
        }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
