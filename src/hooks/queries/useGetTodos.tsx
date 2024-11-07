import { useQuery } from "@tanstack/react-query";
import { getTodos, Token } from "../../apis/todos";

export const useGetTodos = (token: Token) =>
  useQuery({ queryKey: ["todos"], queryFn: () => getTodos(token) });
