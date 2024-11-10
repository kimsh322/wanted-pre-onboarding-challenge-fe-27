import { useQuery } from "@tanstack/react-query";
import { getTodos, GetTodosParams } from "../../apis/todos";

export const useGetTodos = (params: GetTodosParams) =>
  useQuery({
    queryKey: ["todos", params.sort, params.order, params.priorityFilter, params.keyword],
    queryFn: () => getTodos(params),
  });
