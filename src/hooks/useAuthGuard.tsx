import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../zustand";
import { useEffect } from "react";
import { auth } from "../auth/authController";

export const useAuthGuard = () => {
  const navigate = useNavigate();
  const token = auth.getToken();
  const setToken = useGlobalStore((state) => state.setToken);

  useEffect(() => {
    if (token) {
      setToken(token);
    } else {
      navigate("/auth");
    }
  }, [navigate]);
};
