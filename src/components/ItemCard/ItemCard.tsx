import { Trash } from "iconoir-react";
import useList from "../../hooks/useList/useList";
import ItemCardStyled from "./ItemCardStyled";

interface ItemCardProps {
  id: string;
  text: string;
}

const ItemCard = ({ id, text }: ItemCardProps): JSX.Element => {
  const { deleteLocalStorageList } = useList();
  return (
    <ItemCardStyled>
      <div className="padding-small margin-small item">{text}</div>
      <button
        className="btn-small delete"
        onClick={() => deleteLocalStorageList(id)}
      >
        {<Trash />}
      </button>
    </ItemCardStyled>
  );
};

export default ItemCard;
