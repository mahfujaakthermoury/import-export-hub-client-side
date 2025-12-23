import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ForgetPass from "../pages/ForgetPass";
import Error from "../pages/Error";
import AddExport from "../pages/AddExport";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import MyExport from "../pages/MyExport";
import MyImport from "../pages/MyImport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/AllProducts',
        element: <AllProducts></AllProducts>
      },
      {
        path: '/AddExport',
        element: <PrivateRoute><AddExport></AddExport></PrivateRoute>
      },
      {
        path: '/MyExport',
        element: <PrivateRoute><MyExport></MyExport></PrivateRoute>
      },
      {
        path: '/MyImport',
        element: <PrivateRoute><MyImport></MyImport></PrivateRoute>
      },
       {
        path: '/ProductDetails/:myId',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/SignUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/Profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/ForgetPass/:email',
        element: <ForgetPass></ForgetPass>
      },
      
    ]
  }
]);

export default router;