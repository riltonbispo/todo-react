import { useState } from "react";

import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "dormid 8hrs",
      done: true,
    },
    {
      id: 2,
      name: "ir ao mercado",
      done: false,
    },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  const handleDoneTask = (item: number) => {
    let newList = [...list]
    newList[item].done = !newList[item].done
    setList(newList)
  }

  const removeTask = (item: number) => {
    const newList = list.filter((_, index) => index !== item);
    setList(newList);
  };

  console.log(list)

  return (
    <C.Container>
      <C.Area>
        <C.Header>Header</C.Header>

        <AddArea onEnter={handleAddTask} ></AddArea>

        {list.map((item, index)=>(
          <ListItem item={item} key={index} itemKey={index} handleTask={handleDoneTask} removeTask={removeTask} />
        ))}

      </C.Area>
    </C.Container>
  );
};

export default App;
