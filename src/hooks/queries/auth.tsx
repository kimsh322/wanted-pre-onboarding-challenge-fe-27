import { useMutation } from "@tanstack/react-query";
import { signin, signup, SignupResponseType } from "../../apis/auth";

interface SuccessFnType {
  (data: SignupResponseType): void;
}

export const useSignup = (onSuccess: SuccessFnType) => useMutation({ mutationFn: signup, onSuccess });

export const useSignin = (onSuccess: SuccessFnType) => useMutation({ mutationFn: signin, onSuccess });
