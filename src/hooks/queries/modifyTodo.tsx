import { useMutation } from "@tanstack/react-query";
import { createTodo, updateTodo } from "../../apis/todos";

interface SuccessFnType {
  (): void;
}

export const useCreateTodo = (onSuccess: SuccessFnType) => useMutation({ mutationFn: createTodo, onSuccess });

export const useUpdateTodo = (onSuccess: SuccessFnType) => useMutation({ mutationFn: updateTodo, onSuccess });
