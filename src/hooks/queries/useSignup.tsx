import { useMutation } from "@tanstack/react-query";
import { signup, SignupResponseType } from "../../apis/auth";

interface SuccessFnType {
  (data: SignupResponseType): void;
}

export const useSignup = (onSuccess: SuccessFnType) => useMutation({ mutationFn: signup, onSuccess });
