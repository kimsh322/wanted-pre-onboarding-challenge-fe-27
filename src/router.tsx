import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/auth/Login";
import TodoOutlet from "./pages/todolist/TodoOutlet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <TodoOutlet />,
      },
      {
        path: "/:id",
        element: <TodoOutlet />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
