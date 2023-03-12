import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useList from "../../hooks/useList/useList";
import Item from "../../types/types";
import AddItemStyled from "./AddItemStyled";

const AddItem = (): JSX.Element => {
  const { setLocalStorageList } = useList();
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = uuidv4();
    const newItem: Item = { id, name, quantity };
    setLocalStorageList(newItem);

    setName("");
    setQuantity(0);
  };

  return (
    <AddItemStyled>
      <form onSubmit={handleSubmit} className="main-form">
        <input
          className="margin-top-small"
          placeholder="Add Item"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          className="margin-top-small"
          placeholder="Quantity"
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
        <button className="paper-btn btn-small margin-top-small" type="submit">
          Add Item
        </button>
      </form>
    </AddItemStyled>
  );
};

export default AddItem;
