import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TodoList from "./todolist/TodoList";
import { dummyList } from "../mockData";
import Detail from "./detail/Detail";

function Layout() {
  const navigate = useNavigate();

  // 로컬 스토리지에 토큰 기록이 있으면 가져온다.
  const token = !!sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const userToken = JSON.parse(sessionStorage.getItem("token")!);
      //   setUserToken(userToken);
      //   setIsLogin(true);
    } else {
      //   navigate("/login");
    }
  }, [navigate]);

  return (
    <Container>
      <TodoList {...dummyList.data[0]} />
      <Detail />
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
