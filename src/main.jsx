import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './components/Home.jsx';
import Blogs from './components/Blogs.jsx';
import Bookmarks from './components/Bookmarks.jsx';
import Footer from './components/Footer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/',
        element: <Footer></Footer>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
