import { useState } from "react";

import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";

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

  return (
    <C.Container>
      <C.Area>
        <C.Header>Header</C.Header>
        {list.map((item, index)=>(
          <ListItem item={item} key={index}/>
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
