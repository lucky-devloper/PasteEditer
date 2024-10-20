import { configureStore } from '@reduxjs/toolkit'
import codeBoxReducer from '../Features/CodeBoxSlice'
export const store = configureStore({
  reducer: {
    PasteApp: codeBoxReducer
  },
})

store.subscribe(() => {
  localStorage.setItem("Pastes", JSON.stringify(store.getState().PasteApp.storage))
})