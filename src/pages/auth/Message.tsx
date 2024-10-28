import styled from "styled-components";
import theme from "../../styles/theme";
import { useNavigate } from "react-router-dom";

interface Props {
  message: string;
  isSuccess: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Message({ message, isSuccess, setIsOpen }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(false);
    if (isSuccess) navigate("/");
  };

  return (
    <Container>
      <div>{message}</div>
      <button className="confirm" onClick={handleClick}>
        확인
      </button>
    </Container>
  );
}

export default Message;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 15px;

  .confirm {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 10px;
    background-color: ${theme.colors.green100};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.green400};
    }
  }
`;
