import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../../pages/errorpage/ErrorPage";
import Layout from "../mainLayout/Layout";
import Home from "../../../pages/home/Home";
import Login from "../../../pages/login/Login";
import Register from "../../../pages/register/Register";
import UserDashboard from "../../../pages/dashboard/user-dashboard/UserDashboard";
import BookingList from "../../../pages/dashboard/user-dashboard/booking-list/BookingList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
  {
    path: "user-dashboard",
    element: <UserDashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "book",
        element: <BookingList />,
      },
    ],
  },
]);
