import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categoires, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState)
  console.log(toDos);

  const onInput  = (event:React.FocusEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any)
  }
  console.log(category)
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categoires.TO_DO}>TODO</option>
        <option value={Categoires.DOING}>DOING</option>
        <option value={Categoires.DONE}>DONE</option>
      </select>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
