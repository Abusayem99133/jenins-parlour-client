import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../../../pages/errorpage/ErrorPage";
import Layout from "../mainLayout/Layout";
import Home from "../../../pages/home/Home";
import Login from "../../../pages/login/Login";
import Register from "../../../pages/register/Register";
import BookingList from "../../../pages/dashboard/user-dashboard/user-pages/booking-list/BookingList";
import UserDashboardLayout from "../../../pages/dashboard/user-dashboard/UserDashboardLayout";
import UserDashboardHome from "../../../pages/dashboard/user-dashboard/user-pages/user-home/UserDashboardHome";
import Book from "../../../pages/dashboard/user-dashboard/user-pages/service-booking/Book";
import Review from "../../../pages/dashboard/user-dashboard/user-pages/review/Review";

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
    path: "/user-dashboard",
    element: <UserDashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "",
      //   element: <UserDashboardHome />,
      // },
      {
        index: true,
        element: <Navigate to="book" replace />,
      },
      {
        path: "book",
        element: <Book />,
      },
      {
        path: "booking-list",
        element: <BookingList />,
      },
      {
        path: "review",
        element: <Review />,
      },
    ],
  },
]);
