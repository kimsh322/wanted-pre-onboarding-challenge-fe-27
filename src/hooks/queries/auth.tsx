import { useMutation } from "@tanstack/react-query";
import { signin, signup, SignupResponseType } from "../../apis/auth";
import { AxiosError } from "axios";

interface SuccessFnType {
  (data: SignupResponseType): void;
}

interface ErrorFnType {
  (error: AxiosError<{ details: string }>): void;
}

export const useSignup = (onSuccess: SuccessFnType, onError: ErrorFnType) =>
  useMutation({ mutationFn: signup, onSuccess, onError });

export const useSignin = (onSuccess: SuccessFnType, onError: ErrorFnType) =>
  useMutation({ mutationFn: signin, onSuccess, onError });
