import { useMutation } from "@tanstack/react-query";
import { createTodo } from "../../apis/todos";

interface SuccessFnType {
  (): void;
}

export const useCreateTodo = (onSuccess: SuccessFnType) => useMutation({ mutationFn: createTodo, onSuccess });
