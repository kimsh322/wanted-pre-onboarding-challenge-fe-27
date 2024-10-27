import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoList from "./todolist/TodoList";
import Detail from "./detail/Detail";
import { useGetTodos } from "../hooks/queries/useGetTodos";
import theme from "../styles/theme";

function Layout() {
  const navigate = useNavigate();
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
        <ListBox>
          <div className="title-box">
            <h2>할 일 목록</h2>
          </div>
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
  min-height: 50vh;
  padding: 50px 10px;

  .title {
    ${theme.fontStyle.title2}
  }
`;

const Wrapper = styled.ul`
  display: flex;
  width: 80%;
  margin: 10px 0;
  padding: 20px;
  background-color: ${theme.colors.lightBlue100};
  border-radius: 20px;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  gap: 10px;

  .title-box {
    display: flex;
    align-items: center;
    height: 40px;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-right: 10px;
  // TODO 스크롤 확인하기
  &::-webkit-scrollbar {
    display: none;
  }
`;
