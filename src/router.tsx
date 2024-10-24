import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import TodoList from "./pages/TodoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TodoList />,
      },
      //   {
      //     path: '/login',
      //     element: <Login />,
      //   },
    ],
  },
]);
