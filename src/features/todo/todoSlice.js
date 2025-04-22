import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 123, task: 'Sleep', isDone: false }]
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTodo = {
                id: nanoid(),
                newTask: action.payload,
                isDone: false
            };
            state.todos.push(newTodo);
        },
        markDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id == action.payload) {
                    todo.isDone = true
                }
            })
        },
        deleteTask: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id != action.payload )
        }
    }
})

export const { addTask, markDone, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;