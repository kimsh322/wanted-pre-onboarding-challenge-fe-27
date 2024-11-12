import styled from "styled-components";
import theme from "../../styles/theme";
import { useState } from "react";
import { useGetTodos } from "../../hooks/queries/useGetTodos";
import TodoListItem from "./todolist/TodoListItem";
import Detail from "./detail/Detail";
import { auth } from "../../auth/authController";
import { GetTodosParams } from "../../apis/todos";
import TodoFilter from "./todolist/TodoFilter";
import { handleLogout } from "../../auth/utils";
import { useNavigate } from "react-router-dom";

function TodoOutlet() {
  const token = auth.getToken();
  const navigate = useNavigate();
  const [isExtend, setIsExtend] = useState(false);
  const [getTodosParams, setGetTodosParams] = useState<GetTodosParams>({
    token,
  });
  const { data: todos } = useGetTodos(getTodosParams);

  return (
    <Container>
      <Wrapper>
        <ListBox $isExtend={isExtend}>
          <TitleBox className="title-box">
            <h2>할 일 목록</h2>
            <button className="arrow" onClick={() => setIsExtend(!isExtend)}>
              {isExtend ? "<" : ">"}
            </button>
          </TitleBox>
          <TodoFilter getTodosParams={getTodosParams} setGetTodosParams={setGetTodosParams} />
          <ListWrapper>
            {todos?.map((todo) => {
              return <TodoListItem key={todo.id} {...todo} />;
            })}
          </ListWrapper>
        </ListBox>
        <Detail />
      </Wrapper>
      <LogoutBox>
        <button className="logout" onClick={() => handleLogout(navigate)}>
          로그아웃
        </button>
      </LogoutBox>
    </Container>
  );
}

export default TodoOutlet;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

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

const LogoutBox = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 15px;

  .logout {
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: ${theme.colors.red400};
    color: white;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.red700};
    }
  }
`;
