import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  storage: localStorage.getItem("Pastes") ?
    JSON.parse(localStorage.getItem("Pastes")) : [],
  searchData: []
}

export const codeBoxSlice = createSlice({
  name: 'PasteApp',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.storage = [...state.storage, action.payload];
    },
    removeData: (state, action) => {
      state.storage = state.storage.filter((data) => data.id !== action.payload)
    },
    UpdateData: (state, action) => {
      // console.log(action.payload);
      const updated = state.storage.map((data) => data.id == action.payload.id ? { ...data, title: action.payload.title, text: action.payload.text } : data)
      state.storage = JSON.parse(JSON.stringify(updated))
    },
    SearchData: (state, action) => {
      const searchdata = state.storage.filter((data) => data.title.toLowerCase().startsWith(action.payload))
      state.searchData = [...searchdata]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addData, removeData, UpdateData, SearchData } = codeBoxSlice.actions

export default codeBoxSlice.reducer