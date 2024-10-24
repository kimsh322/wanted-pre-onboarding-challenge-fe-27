import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";

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
    <>
      {/* <GlobalNavigationBar /> */}
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;

const Container = styled.div`
  padding-top: 100px;
`;
