import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoList from "./todolist/TodoList";
import Detail from "./detail/Detail";
import { useGetTodos } from "../hooks/queries/useGetTodos";

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
      <h1>TodoList</h1>
      <Wrapper>
        <h2>할 일 목록</h2>
        {todos?.map((todo) => {
          return <TodoList {...todo} />;
        })}
        <h2>상세</h2>
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
`;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 10px 0;
  padding: 10px 0;
  background-color: skyblue;
`;
