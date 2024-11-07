import { Outlet } from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";
import { useAuthGuard } from "../hooks/useAuthGuard";

function Layout() {
  useAuthGuard();

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
