import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../apis/todos";

export const useGetTodos = (token: string | null) =>
  useQuery({ queryKey: ["todos"], queryFn: () => getTodos(token) });
