import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/Home.jsx'; // Import the Home component
import './index.css';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contacts.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/", 
        element:<Home/>
      },
      {
        path:"/blogs", 
        element:<Blogs/> // 
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/services",
        element:<Services/>
      }
     
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
