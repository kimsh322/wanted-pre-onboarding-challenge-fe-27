import { GetTodosParams } from "../../../apis/todos";

interface SelectType {
  name: keyof GetTodosParams;
  options: { value: string; name: string }[];
}

export const SELECTS: SelectType[] = [
  {
    name: "sort",
    options: [
      { value: "", name: "정렬기준" },
      { value: "createdAt", name: "생성일" },
      { value: "updatedAt", name: "수정일" },
      { value: "priority", name: "우선도" },
    ],
  },
  {
    name: "order",
    options: [
      { value: "", name: "정렬순서" },
      { value: "asc", name: "오름차순" },
      { value: "desc", name: "내림차순" },
    ],
  },
  {
    name: "priorityFilter",
    options: [
      { value: "", name: "우선순위필터" },
      { value: "urgent", name: "긴급" },
      { value: "normal", name: "보통" },
      { value: "low", name: "낮음" },
    ],
  },
];

interface SetOptionParams {
  option: keyof GetTodosParams;
  filter: GetTodosParams;
  setFilter: React.Dispatch<React.SetStateAction<GetTodosParams>>;
  value: string;
}

interface SetOption {
  (params: SetOptionParams): void;
}

export const setOption: SetOption = ({ option, filter, setFilter, value }) => {
  const tempObj = { ...filter, [option]: value };
  if (value === "") {
    delete tempObj[option];
  }
  setFilter(tempObj);
};
