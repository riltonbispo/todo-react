import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  item: Item;
  itemKey: number
  handleTask: (item: number) => void
  removeTask: (item: number) => void
};

export const ListItem = ({ item, itemKey, handleTask, removeTask }: Props) => {

  const handleItemDone = () => {
    handleTask(itemKey)
  }

  const removeOneTask = () => {
    removeTask(itemKey)
  }

  return (
    <C.Container done={item.done}>
      <div className="item">
        <input
          type="checkbox"
          checked={item.done}
          onChange={handleItemDone}
        />

        <div className="item">
          <label> {item.name} - </label>
          <span>{item.done === true ? 'Feito' : 'A Fazer'}</span>
        </div>
      </div>

      <button onClick={removeOneTask}>remover</button>
    </C.Container>
  );
};
