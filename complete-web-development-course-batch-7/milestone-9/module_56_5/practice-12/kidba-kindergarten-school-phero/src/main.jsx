import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Courses from './components/Courses/Courses.jsx'
import Blog from './components/Blog/Blog.jsx'
import Contact from './components/Contact/Contact.jsx'
import EmptyPage from './components/EmptyPage/EmptyPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('fakeData/schoolsInfo.json')
      },
      {
        path: '/courses',
        element:  <Courses></Courses>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: '*',
        element: <EmptyPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
