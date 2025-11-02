import { createBrowserRouter } from "react-router-dom";
import Layout from "../mainLayout/Layout";
import Home from "../../home/Home";
import ErrorPage from "../../pages/errorpage/ErrorPage";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

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
        path: "/sigup",
        element: <Register />,
      },
    ],
  },
]);
