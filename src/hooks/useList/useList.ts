import { useAppDispatch } from "../../redux/features/hooks";
import {
  clearListActionCreator,
  deleteListItemActionCrator,
  loadListActionCreator,
  setListActionCreator,
  updateListItemActionCreator,
} from "../../redux/features/listSlice/listSlice";

const useList = () => {
  const dispatch = useAppDispatch();

  const setLocalStorageList = (data: any) => {
    dispatch(setListActionCreator(data));
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
