import styled from "styled-components";
import useInput from "../../hooks/useInput";
import theme from "../../styles/theme";
import { validationCheck } from "./validate";
import Tooltip from "./Tooltip";
import { useSignup } from "../../hooks/queries/auth";
import { SignupResponseType } from "../../apis/auth";
import { useGlobalStore } from "../../zustand";
import { useState } from "react";
import Modal from "../../components/Modal";
import Message from "./Message";
import { AxiosError } from "axios";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Signup({ setIsOpen }: Props) {
  const [inputId] = useInput("");
  const [inputPassword] = useInput("");
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const isValid = validationCheck({ id: inputId.value, password: inputPassword.value });
  const setToken = useGlobalStore((state) => state.setToken);

  const onSuccess = (data: SignupResponseType) => {
    setToken(data.token);
    setMessage(data.message);
    localStorage.setItem("token", data.token);
    setIsMessageModalOpen(true);
  };

  const onError = (error: AxiosError<{ details: string }>) => {
    setMessage(error?.response?.data?.details ?? "");
    setIsMessageModalOpen(true);
  };

  const { mutate: signupMutate, isSuccess } = useSignup(onSuccess, onError);

  const messageModal = {
    isOpen: isMessageModalOpen,
    setIsOpen: setIsMessageModalOpen,
    width: "300px",
    height: "100px",
    children: <Message message={message} isSuccess={isSuccess} setIsOpen={setIsMessageModalOpen} />,
  };

  const handleSignUp = (event: React.SyntheticEvent) => {
    event.preventDefault();
    signupMutate({ email: inputId.value, password: inputPassword.value });
  };

  return (
    <Container onSubmit={handleSignUp}>
      <Tooltip />
      <span className="header-text">회원가입</span>
      <div className="input-box">
        <input id="id" {...inputId} placeholder="email" />
      </div>
      <div className="input-box">
        <input id="password" type="password" {...inputPassword} placeholder="password" />
      </div>
      <div className="button-box">
        <button type="submit" className="sign-up button" disabled={!isValid}>
          회원가입
        </button>
        <button type="button" className="cancel button" onClick={() => setIsOpen(false)}>
          취소
        </button>
      </div>
      <Modal {...messageModal} />
    </Container>
  );
}

export default Signup;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  border-radius: 10px;
  background-color: white;
  position: relative;

  .header-text {
    ${theme.fontStyle.title6}
    margin-bottom: 20px;
  }
  .input-box {
    width: 200px;
    height: 40px;
    margin: 10px 0;
    padding: 0;
    #id,
    #password {
      width: 100%;
      height: 100%;
      font-size: ${theme.fontSize.m};
    }
  }

  .button-box {
    display: flex;
    width: 70%;
    gap: 5%;
    justify-content: space-between;
    margin: 15px 0;
  }

  .button {
    width: 47.5%;
    height: 30px;
    font-size: ${theme.fontSize.xs};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
  }

  .sign-up {
    background-color: ${theme.colors.green400};
    &:hover:enabled {
      background-color: ${theme.colors.green700};
    }
    &:disabled {
      background-color: ${theme.colors.gray100};
      cursor: not-allowed;
    }
  }
  .cancel {
    background-color: ${theme.colors.red400};
    &:hover:enabled {
      background-color: ${theme.colors.red700};
    }
  }
`;
