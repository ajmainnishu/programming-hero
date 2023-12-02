import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import EmptyPage from "../pages/EmptyPage/EmptyPage";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import AdminRoute from "./AdminRoute";
import UpdateManageItem from "../pages/Dashboard/ManageItems/UpdateManageItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import ManageBookings from "../pages/Dashboard/ManageBookings/ManageBookings";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import MyBookings from "../pages/Dashboard/MyBookings/MyBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'menu',
        element: <Menu />
      },
      {
        path: 'shop/:category',
        element: <Shop />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'adminhome',
        element: <AdminRoute><AdminHome /></AdminRoute>
      },
      {
        path: 'userhome',
        element: <UserHome />
      },
      {
        path: 'mycart',
        element: <MyCart />
      },
      {
        path: 'allusers',
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: 'additems',
        element: <AdminRoute><AddItems /></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
      {
        path: 'managebookings',
        element: <AdminRoute><ManageBookings /></AdminRoute>
      },
      {
        path: 'manageItems/updatemanageitems/:id',
        element: <UpdateManageItem />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'reservation',
        element: <Reservation />
      },
      {
        path: 'paymenthistory',
        element: <PaymentHistory />
      },
      {
        path: 'mybookings',
        element: <MyBookings />
      }
    ]
  },
  {
    path: '*',
    element: <EmptyPage />
  }
]);

export default router;