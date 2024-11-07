import axios from "axios";
import { currentServerUrl } from ".";

export const getTodos = async (token: Token) => {
  const response = await axios.get<TodosResponseType>(`${currentServerUrl}/todos`, {
    headers: { Authorization: token },
  });
  return response.data.data;
};

export const getTodoById = async ({ token, id }: GetTodoByIdParams) => {
  const response = await axios.get<TodoResponseType>(`${currentServerUrl}/todos/${id}`, {
    headers: { Authorization: token },
  });
  return response.data.data;
};

export const createTodo = async ({ token, title, content }: CreateTodoParams) => {
  const response = await axios.post<TodoResponseType>(
    `${currentServerUrl}/todos`,
    { title, content },
    {
      headers: { Authorization: token },
    }
  );
  return response.data;
};

export const updateTodo = async ({ token, title, content, id }: UpdateTodoParams) => {
  const response = await axios.put<TodoResponseType>(
    `${currentServerUrl}/todos/${id}`,
    { title, content },
    {
      headers: { Authorization: token },
    }
  );
  return response.data;
};

export const deleteTodo = async ({ token, id }: GetTodoByIdParams) => {
  const response = await axios.delete<{ data: null }>(`${currentServerUrl}/todos/${id}`, {
    headers: { Authorization: token },
  });
  return response.data.data;
};

export type Token = string | null;
export interface TodosResponseType {
  data: GetTodoType[];
}

export interface GetTodoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetTodoByIdParams {
  token: Token;
  id: string;
}

export interface TodoResponseType {
  data: GetTodoType;
}

export interface CreateTodoParams {
  token: Token;
  title: string;
  content: string;
}

export interface UpdateTodoParams extends CreateTodoParams {
  id: string;
}
