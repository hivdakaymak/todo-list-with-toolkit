import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "todo 2", completed: false },
    { id: 3, title: "todo 3", completed: true },
    { id: 4, title: "todo 4", completed: false },
    { id: 5, title: "todo 5", completed: false },
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
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
