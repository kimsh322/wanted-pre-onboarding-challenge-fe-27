import styled from "styled-components";
import React, { useState } from "react";
import { GetTodoType, PriorityType, TodoResponseType } from "../../../apis/todos";
import theme from "../../../styles/theme";
import useInput from "../../../hooks/useInput";
import { useCreateTodo, useUpdateTodo } from "../../../hooks/queries/modifyTodo";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../auth/authController";

interface Props {
  todo?: GetTodoType;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

function WriteTodo({ todo, setIsOpen }: Props) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [titleBind] = useInput(todo?.title ?? "");
  const [contentBind] = useInput(todo?.content ?? "");
  const [priority, setPriority] = useState<PriorityType>("normal");
  const token = auth.getToken();

  const onSuccess = (data?: TodoResponseType) => {
    queryClient.invalidateQueries({ queryKey: ["todos"] });
    queryClient.invalidateQueries({ queryKey: ["todo", todo?.id ?? ""] });
    setIsOpen!(false);
    // 추가일 경우 navigate
    if (!todo) navigate(`/${data?.data.id ?? ""}`);
  };

  const { mutate: createMutate } = useCreateTodo(onSuccess);
  const { mutate: updateMutate } = useUpdateTodo(onSuccess);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (todo)
      updateMutate({ token, title: titleBind.value, content: contentBind.value, id: todo.id, priority });
    else createMutate({ token, title: titleBind.value, content: contentBind.value, priority });
  };

  // 변경사항 있는지 확인하는 함수
  const isValid = () => {
    if ((todo?.title ?? "") === titleBind.value && (todo?.content ?? "") === contentBind.value) return true;
    if (titleBind.value === "" || contentBind.value === "") return true;
    return false;
  };

  const PRIORITY_OPTIONS: PriorityType[] = ["urgent", "normal", "low"];

  return (
    <Container onSubmit={handleSubmit}>
      <h3>TODO {todo ? "수정" : "추가"}</h3>
      <RadioWrapper>
        {PRIORITY_OPTIONS.map((option) => {
          return (
            <li key={option}>
              <input
                type="radio"
                name="priority"
                value={option}
                checked={option === priority}
                onChange={() => setPriority(option)}
              />
              {option}
            </li>
          );
        })}
      </RadioWrapper>
      <input className="title" placeholder="Title" {...titleBind}></input>
      <textarea className="content" placeholder="Content" {...contentBind}></textarea>
      <ButtonBox>
        <button type="submit" className="submit" disabled={isValid()}>
          {todo ? "수정하기" : "추가하기"}
        </button>
        <button type="button" className="cancel" onClick={() => setIsOpen!(false)}>
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

const RadioWrapper = styled.ul`
  display: flex;
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
