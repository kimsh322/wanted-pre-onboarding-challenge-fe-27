import { Link } from "react-router-dom";
import styled from "styled-components";
import { GetTodoType } from "../../apis/todos";
import theme from "../../styles/theme";

function TodoList({ title, id }: GetTodoType) {
  return <SLink to={`/${id}`}>{title}</SLink>;
}

export default TodoList;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 95%;
  height: 50px;
  padding: 10px;
  border: 1px solid ${theme.colors.blue100};
  border-radius: 10px;
  margin: 0 0 5px 0;
  text-decoration: none;
  background-color: ${theme.colors.blue50};
`;
