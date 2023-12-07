import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import About from '../Pages/Home/About/About';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import CheckOut from '../Pages/CheckOut/CheckOut';
import BookService from '../Pages/BookService/BookService';
import Bookings from '../Pages/Bookings/Bookings';
import PrivateRoute from '../Providers/PrivateRoute';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/about',
            element:<About></About>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/book/:id',
          element:<BookService></BookService>,
          loader: ({params}) => fetch(`http://localhost:5000/monira/${params.id}`)
        },
        {
         path:'/bookings',
         element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
       
      ]
    },
  ]);
  

export default router;