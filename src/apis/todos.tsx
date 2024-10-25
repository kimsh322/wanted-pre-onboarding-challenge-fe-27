import axios from "axios";
import { currentServerUrl } from ".";

export const getTodos = async (token: string) => {
  const response = await axios.get<TodosResponseType>(`${currentServerUrl}/todos`, {
    headers: { Authorization: token },
  });
  return response.data.data;
};

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
