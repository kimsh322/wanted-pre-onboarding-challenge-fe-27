import { NavigateFunction } from "react-router-dom";
import { auth } from "./authController";

export const handleLogout = (navigate: NavigateFunction) => {
  auth.clear();
  navigate("/auth");
};
