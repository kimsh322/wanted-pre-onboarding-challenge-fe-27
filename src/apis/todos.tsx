import axios from "axios";
import { currentServerUrl } from ".";

// TODO : countOnly 처리하기
export const getTodos = async ({ token, sort, order, priorityFilter, keyword }: GetTodosParams) => {
  const response = await axios.get<TodosResponseType>(`${currentServerUrl}/todos`, {
    headers: { Authorization: token },
    params: {
      sort,
      order,
      priorityFilter,
      keyword,
    },
  });
  return response.data.data;
};

export const getTodoById = async ({ token, id }: GetTodoByIdParams) => {
  const response = await axios.get<TodoResponseType>(`${currentServerUrl}/todos/${id}`, {
    headers: { Authorization: token },
  });
  return response.data.data;
};

export const createTodo = async ({ token, title, content, priority }: CreateTodoParams) => {
  const response = await axios.post<TodoResponseType>(
    `${currentServerUrl}/todos`,
    { title, content, priority },
    {
      headers: { Authorization: token },
    }
  );
  return response.data;
};

export const updateTodo = async ({ token, title, content, id, priority }: UpdateTodoParams) => {
  const response = await axios.put<TodoResponseType>(
    `${currentServerUrl}/todos/${id}`,
    { title, content, priority },
    {
      headers: { Authorization: token },
    }
  );
  return response.data;
};

export const deleteTodo = async ({ token, id }: DeleteTodoByIdParams) => {
  const response = await axios.delete<{ data: null }>(`${currentServerUrl}/todos/${id}`, {
    headers: { Authorization: token },
  });
  return response.data.data;
};

export type Token = string | null;

export type PriorityType = "urgent" | "normal" | "low";
export interface TodosResponseType {
  data: GetTodoType[];
}

export interface GetTodosParams {
  token: Token;
  sort?: "createdAt" | "updatedAt" | "priority";
  order?: "asc" | "desc";
  priorityFilter?: PriorityType;
  keyword?: string;
  countOnly?: boolean;
}

export interface GetTodoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  priority: PriorityType;
}

export interface GetTodoByIdParams {
  token: Token;
  id: string;
}

export interface DeleteTodoByIdParams extends GetTodoByIdParams {}

export interface TodoResponseType {
  data: GetTodoType;
}

export interface CreateTodoParams {
  token: Token;
  title: string;
  content: string;
  priority: PriorityType;
}

export interface UpdateTodoParams extends CreateTodoParams {
  id: string;
}
