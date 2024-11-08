import styled from "styled-components";
import useInput from "../../hooks/useInput";
import theme from "../../styles/theme";
import Modal from "../../components/Modal";
import { useState } from "react";
import Signup from "./Signup";
import { validationCheck } from "./validate";
import Tooltip from "./Tooltip";
import { useSignin } from "../../hooks/queries/auth";
import { SignupResponseType } from "../../apis/auth";
import Message from "./Message";
import { AxiosError } from "axios";
import { auth } from "../../auth/authController";
import useModal from "../../hooks/useModal";

const Login = () => {
  const [inputId] = useInput("");
  const [inputPassword] = useInput("");
  const [message, setMessage] = useState("");
  const isValid = validationCheck({ id: inputId.value, password: inputPassword.value });

  const onSuccess = (data: SignupResponseType) => {
    setMessage(data.message);
    auth.setToken(data.token);
    messageModal.setIsOpen(true);
  };

  const onError = (error: AxiosError<{ details: string }>) => {
    setMessage(error?.response?.data?.details ?? "");
    messageModal.setIsOpen(true);
  };
  const { mutate: signinMutate, isSuccess } = useSignin(onSuccess, onError);

  const signupModal = useModal({ width: "300px", height: "250px", children: <Signup /> });
  const messageModal = useModal({
    width: "300px",
    height: "100px",
    children: <Message message={message} isSuccess={isSuccess} />,
  });

  // 로그인 함수
  const handleSignIn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    signinMutate({ email: inputId.value, password: inputPassword.value });
  };

  return (
    <>
      <Container onSubmit={handleSignIn}>
        <div className="content-box">
          <Tooltip />
          <span className="header-text">Login</span>
          <div className="input-box">
            <input id="id" {...inputId} placeholder="email" />
          </div>
          <div className="input-box">
            <input id="password" type="password" {...inputPassword} placeholder="password" />
          </div>
          <button type="submit" className="sign-in" disabled={!isValid}>
            로그인
          </button>
          <div className="sign-up-box" onClick={() => signupModal.setIsOpen(true)}>
            <button type="button" className="sign-up">
              회원가입
            </button>
          </div>
        </div>
      </Container>
      <Modal {...signupModal} />
      <Modal {...messageModal} />
    </>
  );
};
export default Login;

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .content-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 70%;
    padding: 20px 0;
    border-radius: 10px;
    background-color: white;
    position: relative;

    .header-text {
      ${theme.fontStyle.title4}
      margin-bottom: 20px;
    }
    .input-box {
      width: 70%;
      height: 80px;
      margin: 10px 0;
      padding: 0;
      #id,
      #password {
        width: 100%;
        height: 100%;
        font-size: ${theme.fontSize.m};
      }
    }
    .sign-in {
      width: 70%;
      height: 40px;
      margin: 15px 0;
      font-size: ${theme.fontSize.m};
      border: none;
      background-color: ${theme.colors.green400};
      border-radius: 5px;
      cursor: pointer;
      color: white;

      &:hover:enabled {
        background-color: ${theme.colors.green700};
      }

      &:disabled {
        background-color: ${theme.colors.gray100};
        cursor: not-allowed;
      }
    }

    .sign-up-box {
      display: flex;
      width: 70%;
    }

    .sign-up {
      height: 30px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      color: ${theme.colors.blue400};
    }
  }
`;
