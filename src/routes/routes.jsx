import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/shared/Secret/Secret";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children : [
        {
            path : '/',
            element : <Home />
        },
        {
          path : '/menu',
          element : <Menu />
        },
        {
          path : '/order/:category',
          element : <Order />
        },
        {
          path : '/login',
          element : <Login />
        },
        {
          path : '/signup',
          element : <SignUp />
        },
        {
          path : '/secret',
          element : <PrivateRoute><Secret /></PrivateRoute>
        }
      ]
    },
    {
      path : '/dashboard',
      element : <PrivateRoute><Dashboard /></PrivateRoute>,
      children : [
        {
          path : 'mycart',
          element : <MyCart />
        },
        {
          path : 'payment',
          element : <Payment />
        },
        {
          path : 'allusers',
          element : <AdminRoute><AllUsers /></AdminRoute>
        },
        {
          path : 'additem',
          element : <AdminRoute><AddItem /></AdminRoute>
        },
        {
          path : 'manage',
          element : <AdminRoute><ManageItems /></AdminRoute>
        }
      ]
    }
  ]);