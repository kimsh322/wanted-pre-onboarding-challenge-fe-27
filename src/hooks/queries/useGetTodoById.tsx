import { useQuery } from "@tanstack/react-query";
import { getTodoById, GetTodoByIdParams } from "../../apis/todos";

export const useGetTodoById = (params: GetTodoByIdParams) =>
  useQuery({ queryKey: ["todo", params.id], queryFn: () => getTodoById(params), enabled: params.id !== "" });
