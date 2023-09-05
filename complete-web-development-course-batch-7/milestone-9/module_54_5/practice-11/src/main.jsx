import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Restaurant from './components/Restaurant/Restaurant.jsx'
import Foods from './components/Foods/Foods.jsx'
import FoodDetail from './components/FoodDetail/FoodDetail.jsx'
import EmptyPage from './components/EmptyPage/EmptyPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Restaurant />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: 'mealdb',
        element: <Foods />,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      },
      {
        path: 'mealdb/:mealdbId',
        element: <FoodDetail />,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealdbId}`)
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