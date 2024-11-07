import styled from "styled-components";
import theme from "../../styles/theme";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteTodo } from "../../hooks/queries/modifyTodo";
import { useNavigate } from "react-router-dom";
import { auth } from "../../auth/authController";

interface Props {
  id: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

function DeleteConfirm({ id, setIsOpen }: Props) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const token = auth.getToken();

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["todos"] });
    queryClient.invalidateQueries({ queryKey: ["todo", id] });
  };

  const { mutate: deleteMutate } = useDeleteTodo(onSuccess);

  const handleDelete = () => {
    deleteMutate({ token, id });
    navigate("/");
    setIsOpen!(false);
  };

  return (
    <Container>
      <p>정말로 삭제하시겠습니까?</p>
      <ButtonBox>
        <button className="confirm" onClick={handleDelete}>
          삭제
        </button>
        <button className="cancel" onClick={() => setIsOpen!(false)}>
          취소
        </button>
      </ButtonBox>
    </Container>
  );
}

export default DeleteConfirm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  gap: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;

  .confirm,
  .cancel {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .confirm {
    background-color: ${theme.colors.red400};
    color: white;
    &:hover {
      background-color: ${theme.colors.red700};
    }
  }

  .cancel:hover {
    background-color: ${theme.colors.gray400};
  }
`;
