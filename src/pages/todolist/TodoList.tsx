import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { GetTodoType } from "../../apis/todos";
import theme from "../../styles/theme";

function TodoList({ title, id }: GetTodoType) {
  const { id: comparisonId } = useParams();
  const isCurrent = comparisonId === id;
  return (
    <SLink to={`/${id}`} $isCurrent={isCurrent}>
      {title}
    </SLink>
  );
}

export default TodoList;

const SLink = styled(Link)<{ $isCurrent: boolean }>`
  display: flex;
  align-items: center;
  width: 95%;
  height: 50px;
  padding: 10px;
  border: 1px solid ${theme.colors.blue100};
  border-radius: 10px;
  margin: 0 0 5px 0;
  text-decoration: none;
  background-color: ${({ $isCurrent }) => ($isCurrent ? theme.colors.blue100 : theme.colors.blue50)};
  color: black;

  &:hover {
    background-color: ${theme.colors.blue200};
  }
`;
