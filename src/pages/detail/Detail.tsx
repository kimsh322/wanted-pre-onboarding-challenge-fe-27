import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetTodoById } from "../../hooks/queries/useGetTodoById";
import theme from "../../styles/theme";

function Detail() {
  const { id } = useParams();
  //TODO : 토큰 연결하기
  const { data: todoData } = useGetTodoById({ token: "11", id: id ?? "" });
  return (
    <Container>
      <div className="head-line">
        <h2>상세</h2>
        <ButtonBox>
          <button className="create">Todo 추가</button>
          <button className="modify" disabled={!id}>
            Todo 수정
          </button>
          <button className="delete" disabled={!id}>
            Todo 삭제
          </button>
        </ButtonBox>
      </div>
      <ContentBox>{todoData?.content}</ContentBox>
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
