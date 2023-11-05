import { createBrowserRouter } from "react-router-dom";

import Main from "../../Pages/Main/Main";
import Login from "./../../Pages/Authentication/Login/Login";
import SignUp from "./../../Pages/Authentication/SignUp/SignUp";
import Home from "./../../Pages/Home/Home/Home";
import Menu from "./../../Pages/FoodMenu/Menu/Menu";
import About from "./../../Pages/Home/About/About";
import NotFound from "../../Pages/Others/NotFound/NotFound";
import Profile from "../../Pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { productsAndCartLoader } from "./../../Loaders/ProductsAndCartLoader";
import CardDetails from "./../../Pages/FoodMenu/CardDetails/CardDetails";

import ItemDetails from "../../Pages/FoodMenu/Item/ItemDetails";

import NotificationPage from "../../Pages/Notification/Notification";
import Review from "../../Pages/Review/Review";
import Dining from "../../Pages/Dining/Dining";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/reservation",
        element: (
          <PrivateRoute>
            {/* <Reservation></Reservation> */}
          </PrivateRoute>
        ),
      },
      {
        path: "/canteen",
        element: (
          // <PrivateRoute>
            <Menu></Menu>
          // </PrivateRoute>
        ),
      },
      {
        path: "/dining",
        element: <Dining></Dining>
      },
      {
        path: "/canteen/:id",
        element: <ItemDetails></ItemDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "/cardDetails",
        loader: () => productsAndCartLoader(),
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/notification",
        element: <NotificationPage></NotificationPage>
      },
      {
        path: "/review",
        element: <Review></Review>
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
