import { atom, selector } from "recoil";



export enum Categoires {
  "TO_DO"= "TO_DO", 
  "DOING" = "DOING", 
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categoires;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<Categoires>({
key: "category",
default: Categoires.TO_DO,

})

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({get }) => {
    const toDos = get(toDoState);
    const category = get (categoryState);
    return  toDos.filter((toDo) => toDo.category === category);
  },
})
