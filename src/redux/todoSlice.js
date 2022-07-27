import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "todo 2", completed: true },
  ],
  // eyleme yanıt verecek alan
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        // yeni gelecek olan to do initial state içinde ki değerlerle aynı özelliğe sahip olacak
      };
      state.push(newTodo);
      // yeni oluşturulan state dizinin en sonuna eklenerek artmaya devam edecek
    },
    toggleComplate: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplate, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
