import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        done: false,
        name: action.payload,
      };
      state.push(newTask);
    },

    toggleTask: (state, action) => {
      const id = action.payload;
      const task = state.find((task) => task.id === id);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      const id = action.payload;

      state = state.filter((task) => task.id !== id);
      return state;
    },
  },
});
