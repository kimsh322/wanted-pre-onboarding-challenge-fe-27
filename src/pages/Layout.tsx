import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoList from "./todolist/TodoList";
import Detail from "./detail/Detail";
import { useGetTodos } from "../hooks/queries/useGetTodos";
import theme from "../styles/theme";

function Layout() {
  const navigate = useNavigate();
  const [isExtend, setIsExtend] = useState(false);
  const token = localStorage.getItem("token");
  //TODO : 토큰 연결하기
  const { data: todos } = useGetTodos("123");

  useEffect(() => {
    if (token) {
      //   setUserToken(userToken);
      //   setIsLogin(true);
    } else {
      //   navigate("/login");
    }
  }, [navigate]);

  return (
    <Container>
      <h1 className="title">TodoList</h1>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 500px;
  padding: 50px 10px;

  .title {
    ${theme.fontStyle.title2}
  }
`;

const Wrapper = styled.ul`
  display: flex;
  width: 80%;
  height: 100%;
  margin: 10px 0;
  padding: 30px;
  background-color: ${theme.colors.lightBlue100};
  border-radius: 20px;
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
