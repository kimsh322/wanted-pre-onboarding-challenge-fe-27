import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/auth/Login";
import { auth } from "./auth/authController";
import TodoOutlet from "./pages/todos/TodoOutlet";

const authLoader = () => {
  const token = auth.getToken();
  if (!token) {
    return redirect("/auth");
  }
  return null;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: authLoader,
    children: [
      {
        index: true,
        element: <TodoOutlet />,
      },
      {
        path: "/:id",
        element: <TodoOutlet />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);
