import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    TODO_FETCH_FAILED: (state, action) => {},
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
      console.log(id);
      state = state.filter((task) => task.id !== id);
      return state;
    },
    fetchData: (state, action) => {
      const data = action.payload;
      data.forEach((v, index) => {
        let title = v.title;
        const newTask = {
          id: v.id,
          done: false,
          name: title,
        };
        state.push(newTask);
      });
    },
  },
});
