import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../auth/authController";

export const useAuthGuard = () => {
  const navigate = useNavigate();
  const token = auth.getToken();

  useEffect(() => {
    if (!token) navigate("/auth");
  }, [navigate]);
};
