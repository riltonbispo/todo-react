import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";

type Props = {
  item: Item;
  itemKey: number
  handleTask: (item: number) => void
};

export const ListItem = ({ item, itemKey, handleTask }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);
  
  {console.log(itemKey)}

  const handleItemDone = () => {
    handleTask(itemKey)
  }

  return (
    <C.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={handleItemDone}
      />
      <label> {item.name} - </label>
      <span>{item.done === true ? 'Feito' : 'A Fazer'}</span>
    </C.Container>
  );
};
