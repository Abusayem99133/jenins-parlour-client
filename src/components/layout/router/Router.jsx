import { createBrowserRouter } from "react-router-dom";
import Layout from "../mainLayout/Layout";
import Home from "../../home/Home";
import ErrorPage from "../../pages/errorpage/ErrorPage";

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
    ],
  },
]);
