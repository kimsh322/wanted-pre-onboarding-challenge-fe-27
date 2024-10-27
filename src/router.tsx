import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Detail from "./pages/detail/Detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
  //   {
  //     path: '/login',
  //     element: <Login />,
  //   },
]);
