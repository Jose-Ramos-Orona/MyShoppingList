import { useAppDispatch } from "../../redux/features/hooks";
import {
  clearListActionCreator,
  deleteListItemActionCrator,
  loadListActionCreator,
  setListActionCreator,
  updateListItemActionCreator,
} from "../../redux/features/listSlice/listSlice";
import Item from "../../types/types";

const useList = () => {
  const dispatch = useAppDispatch();

  const setLocalStorageList = (newItem: Item) => {
    const storedItems = JSON.parse(localStorage.getItem("items") || "[]");
    storedItems.push(newItem);
    dispatch(setListActionCreator(storedItems));
  };

  const loadLocalStorageList = () => {
    dispatch(loadListActionCreator());
  };

  const clearLocalStorageList = () => {
    dispatch(clearListActionCreator());
  };

  const deleteLocalStorageList = (key: string) => {
    dispatch(deleteListItemActionCrator(key));
  };

  const updateLocalStorageList = (key: string, value: any) => {
    dispatch(updateListItemActionCreator({ key, value }));
  };

  return {
    setLocalStorageList,
    loadLocalStorageList,
    clearLocalStorageList,
    deleteLocalStorageList,
    updateLocalStorageList,
  };
};

export default useList;
