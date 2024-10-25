import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../apis/todos";

export const useGetTodos = (token: string) =>
  useQuery({ queryKey: ["todos"], queryFn: () => getTodos(token) });
