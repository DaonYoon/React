import React from "react";
import { useSetRecoilState } from "recoil";
import { Categoires, IToDo, toDoState } from "../atoms";

const food = ["pizza", "mango", "kimchi", "kimbab"];

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categoires.DOING && (
        <button name={Categoires.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categoires.TO_DO && (
        <button name={Categoires.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categoires.DONE && (
        <button name={Categoires.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
