import { Link } from "react-router-dom";
import styled from "styled-components";
import { GetTodoType } from "../../apis/todos";

function TodoList({ title, id }: GetTodoType) {
  return (
    <Container>
      <Link to={`/${id}`}>{title}</Link>
    </Container>
  );
}

export default TodoList;

const Container = styled.li`
  display: flex;
  width: 80%;
  height: 50px;
  padding: 10px;
  border: 1px solid black;
  margin: 5px;
`;
