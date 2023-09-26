import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import AuthProviders from './providers/AuthProviders'
import Orders from './components/Orders'
import PrivateRoute from './routes/PrivateRoute'
import Profile from './components/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders /></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
