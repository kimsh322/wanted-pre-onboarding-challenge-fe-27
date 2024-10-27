import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetTodoById } from "../../hooks/queries/useGetTodoById";

function Detail() {
  const { id } = useParams();
  const { data: todoData } = useGetTodoById({ token: "11", id: id ?? "" });
  return <Container>{todoData?.content}</Container>;
}

export default Detail;

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 500px;
  border: 1px solid black;
  margin-top: 20px;
`;
