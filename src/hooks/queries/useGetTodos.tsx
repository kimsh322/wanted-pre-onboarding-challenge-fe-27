import { useQuery } from "@tanstack/react-query";
import { getTodos, GetTodosParams } from "../../apis/todos";

export const useGetTodos = (params: GetTodosParams) =>
  useQuery({ queryKey: ["todos"], queryFn: () => getTodos(params) });
