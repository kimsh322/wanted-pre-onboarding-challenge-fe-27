import { useMutation } from "@tanstack/react-query";
import { createTodo, deleteTodo, TodoResponseType, updateTodo } from "../../apis/todos";

interface SuccessFnType {
  (data?: TodoResponseType): void;
}

interface DeleteSuccessFnType {
  (): void;
}

export const useCreateTodo = (onSuccess: SuccessFnType) => useMutation({ mutationFn: createTodo, onSuccess });

export const useUpdateTodo = (onSuccess: SuccessFnType) => useMutation({ mutationFn: updateTodo, onSuccess });

export const useDeleteTodo = (onSuccess: DeleteSuccessFnType) =>
  useMutation({ mutationFn: deleteTodo, onSuccess });
