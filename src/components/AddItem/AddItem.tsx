import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useList from "../../hooks/useList/useList";
import Item from "../../types/types";

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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add Item"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        placeholder="Quantity"
        type="number"
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
