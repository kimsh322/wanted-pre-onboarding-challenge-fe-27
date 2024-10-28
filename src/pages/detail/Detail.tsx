import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetTodoById } from "../../hooks/queries/useGetTodoById";
import theme from "../../styles/theme";
import Modal from "../../components/Modal";
import WriteTodo from "./WriteTodo";
import { useState } from "react";
import DeleteConfirm from "./DeleteConfirm";

function Detail() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { id } = useParams();

  //TODO : 토큰 연결하기
  const { data: todoData } = useGetTodoById({ token: "11", id: id ?? "" });

  const createTodoModal = {
    width: "50%",
    height: "500px",
    children: <WriteTodo setIsOpen={setIsCreateModalOpen} />,
    isOpen: isCreateModalOpen,
    setIsOpen: setIsCreateModalOpen,
  };
  const modifyTodoModal = {
    width: "50%",
    height: "500px",
    children: <WriteTodo setIsOpen={setIsModifyModalOpen} todo={todoData} />,
    isOpen: isModifyModalOpen,
    setIsOpen: setIsModifyModalOpen,
  };

  const deleteTodoModal = {
    width: "300px",
    height: "100px",
    children: <DeleteConfirm setIsOpen={setIsDeleteModalOpen} id={todoData?.id ?? ""} />,
    isOpen: isDeleteModalOpen,
    setIsOpen: setIsDeleteModalOpen,
  };

  return (
    <Container>
      <div className="head-line">
        <h2>상세</h2>
        <ButtonBox>
          <button className="create" onClick={() => createTodoModal.setIsOpen(true)}>
            Todo 추가
          </button>
          <button className="modify" disabled={!id} onClick={() => modifyTodoModal.setIsOpen(true)}>
            Todo 수정
          </button>
          <button className="delete" disabled={!id} onClick={() => deleteTodoModal.setIsOpen(true)}>
            Todo 삭제
          </button>
        </ButtonBox>
      </div>
      <ContentBox>{todoData?.content}</ContentBox>
      <Modal {...createTodoModal} />
      <Modal {...modifyTodoModal} />
      <Modal {...deleteTodoModal} />
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;

  .head-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;

  .create,
  .modify,
  .delete {
    border: none;
    border-radius: 10px;
    width: 120px;
    height: 40px;
    cursor: pointer;
    color: white;

    &:disabled {
      background-color: ${theme.colors.gray400};
      cursor: not-allowed;
    }
  }

  .create {
    background-color: ${theme.colors.green400};
    &:hover:enabled {
      background-color: ${theme.colors.green700};
    }
  }

  .modify {
    background-color: ${theme.colors.blue400};
    &:hover:enabled {
      background-color: ${theme.colors.blue700};
    }
  }

  .delete {
    background-color: ${theme.colors.red400};
    &:hover:enabled {
      background-color: ${theme.colors.red700};
    }
  }
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
  background: #fff;
`;
