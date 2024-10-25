import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const { id } = useParams();
  return <Container>Detail {id}</Container>;
}

export default Detail;

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 500px;
  border: 1px solid black;
  margin-top: 20px;
`;
