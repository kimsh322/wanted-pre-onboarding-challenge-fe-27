import styled from "styled-components";
import React from "react";
import { GetTodoType } from "../../apis/todos";
import theme from "../../styles/theme";
import useInput from "../../hooks/useInput";
import { useCreateTodo } from "../../hooks/queries/useCreateTodo";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  todo?: GetTodoType;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function WriteTodo({ todo, setIsOpen }: Props) {
  const queryClient = useQueryClient();
  const [titleBind] = useInput(todo?.title ?? "");
  const [contentBind] = useInput(todo?.content ?? "");

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["todos"] });
    queryClient.invalidateQueries({ queryKey: ["todo", todo?.id ?? ""] });
    setIsOpen(false);
  };

  const { mutate: createMutate } = useCreateTodo(onSuccess);

  //TODO : 토큰 적용하기
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // TODO : 수정 api 연결하기
    if (todo) createMutate({ token: "11", title: titleBind.value, content: contentBind.value });
    else createMutate({ token: "11", title: titleBind.value, content: contentBind.value });
  };

  // 변경사항 있는지 확인하는 함수
  const isValid = () => {
    if ((todo?.title ?? "") === titleBind.value && (todo?.content ?? "") === contentBind.value) return true;
    if (titleBind.value === "" || contentBind.value === "") return true;
    return false;
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h3>TODO {todo ? "수정" : "추가"}</h3>
      <input className="title" placeholder="Title" {...titleBind}></input>
      <textarea className="content" placeholder="Content" {...contentBind}></textarea>
      <ButtonBox>
        <button type="submit" className="submit" disabled={isValid()}>
          {todo ? "수정하기" : "추가하기"}
        </button>
        <button type="button" className="cancel" onClick={() => setIsOpen(false)}>
          취소하기
        </button>
      </ButtonBox>
    </Container>
  );
}

export default WriteTodo;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  gap: 20px;

  .title {
    height: 40px;
    padding: 10px;
  }

  .content {
    width: 100%;
    height: 300px;
    padding: 10px;
    resize: none;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;

  .submit,
  .cancel {
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

  .submit {
    background-color: ${theme.colors.green400};
    &:hover:enabled {
      background-color: ${theme.colors.green700};
    }
  }

  .cancel {
    background-color: ${theme.colors.red400};
    &:hover:enabled {
      background-color: ${theme.colors.red700};
    }
  }
`;
