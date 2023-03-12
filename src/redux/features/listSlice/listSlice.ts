import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocalStorageState {
  data: any;
}

const initialListState: LocalStorageState = {
  data: {},
};

const listSlice = createSlice({
  name: "list",
  initialState: initialListState,
  reducers: {
    loadList: (state) => {
      const savedData = localStorage.getItem("myData");
      if (savedData) {
        state.data = JSON.parse(savedData);
      }
    },

    setList: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      localStorage.setItem("items", JSON.stringify(action.payload));
    },

    clearList: (state) => {
      state.data = {};
      localStorage.clear();
    },

    deleteListItem: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      delete state.data[key];
      localStorage.removeItem(key);
    },

    updateListItem: (
      state,
      action: PayloadAction<{ key: string; value: any }>
    ) => {
      const { key, value } = action.payload;
      state.data[key] = value;
      localStorage.setItem(key, JSON.stringify(value));
    },
  },
});

export const listReducer = listSlice.reducer;

export const {
  loadList: loadListActionCreator,
  setList: setListActionCreator,
  clearList: clearListActionCreator,
  deleteListItem: deleteListItemActionCrator,
  updateListItem: updateListItemActionCreator,
} = listSlice.actions;
