import styled from "styled-components";
import theme from "../../styles/theme";
import { useState } from "react";
import { useGetTodos } from "../../hooks/queries/useGetTodos";
import TodoList from "./TodoList";
import Detail from "../detail/Detail";

function TodoOutlet() {
  const [isExtend, setIsExtend] = useState(false);

  //TODO : 토큰 연결하기
  const { data: todos } = useGetTodos("123");

  return (
    <>
      <ListBox $isExtend={isExtend}>
        <TitleBox className="title-box">
          <h2>할 일 목록</h2>
          <button className="arrow" onClick={() => setIsExtend(!isExtend)}>
            {isExtend ? "<" : ">"}
          </button>
        </TitleBox>
        <ListWrapper>
          {todos?.map((todo) => {
            return <TodoList key={todo.id} {...todo} />;
          })}
        </ListWrapper>
      </ListBox>
      <Detail />
    </>
  );
}

export default TodoOutlet;

const ListBox = styled.div<{ $isExtend: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $isExtend }) => ($isExtend ? "50%" : "30%")};
  gap: 10px;
  transition-duration: 0.5s;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 40px;
  padding: 10px;

  .arrow {
    font-size: ${theme.fontSize.l};
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-right: 10px;
  max-height: 500px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
