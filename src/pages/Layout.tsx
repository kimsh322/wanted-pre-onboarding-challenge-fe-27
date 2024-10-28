import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";
import { useGlobalStore } from "../zustand";

function Layout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const setToken = useGlobalStore((state) => state.setToken);

  useEffect(() => {
    if (token) {
      setToken(token);
    } else {
      navigate("/auth");
    }
  }, [navigate]);

  return (
    <Container>
      <h1 className="title">TodoList</h1>
      <Wrapper>
        <Outlet />
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
