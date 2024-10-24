import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

function TodoList({ title, id }: Props) {
  return (
    <Container>
      <Link to={`detail/:${id}`}>{title}</Link>
    </Container>
  );
}

export default TodoList;

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 50px;
`;
