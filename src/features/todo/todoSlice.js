import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: []
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            };
            state.todos.push(newTodo);
        },
        markDone: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isDone = !todo.isDone;
            }
        },
        deleteTask: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id != action.payload )
        }
    }
})

export const { addTask, markDone, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;