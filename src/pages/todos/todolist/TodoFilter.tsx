import { GetTodosParams } from "../../../apis/todos";
import { SELECTS, setOption } from "./filterOptions";

interface Props {
  getTodosParams: GetTodosParams;
  setGetTodosParams: React.Dispatch<React.SetStateAction<GetTodosParams>>;
}

function TodoFilter({ getTodosParams, setGetTodosParams }: Props) {
  return (
    <>
      <div>필터</div>
      <div>
        {SELECTS.map((el) => {
          return (
            <select
              key={el.name}
              onChange={(e) =>
                setOption({
                  option: el.name,
                  filter: getTodosParams,
                  setFilter: setGetTodosParams,
                  value: e.target.value,
                })
              }>
              {el.options.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                );
              })}
            </select>
          );
        })}

        <input
          onChange={(e) =>
            setOption({
              option: "keyword",
              filter: getTodosParams,
              setFilter: setGetTodosParams,
              value: e.target.value,
            })
          }></input>
      </div>
    </>
  );
}

export default TodoFilter;
