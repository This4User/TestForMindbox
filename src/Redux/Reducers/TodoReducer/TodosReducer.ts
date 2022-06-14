import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoI } from "../../../components/Todo/Todo";
import generateId from "../../../utils";
import { RootState } from "../../store";


export enum FilterE {
	All = "All",
	Active = "Active",
	Complete = "Complete"
}

export interface TodosState {
	todos: Array<TodoI>;
	filter: FilterE;
}

const initialState: TodosState = {
	todos: [
		{
			id: generateId(),
			title: "Task 1",
			isDone: false,
		},
		{
			id: generateId(),
			title: "Task 2",
			isDone: true,
		},
	],
	filter: FilterE.All,
};

const todosSlice = createSlice({
								   name: "todos",
								   initialState,
								   reducers: {
									   addTodo(state, action: PayloadAction<TodoI>) {
										   state.todos.push({
																id: action.payload.id,
																title: action.payload.title,
																isDone: false,
															});
									   },
									   toggleTodo(state, action: PayloadAction<TodoI>) {
										   const todo = state.todos.find(todo => todo.id === action.payload.id);
										   if (todo) {
											   todo.isDone = !todo.isDone;
										   }
									   },
									   setFilter(state, action: PayloadAction<FilterE>) {
										   state.filter = action.payload;
									   },
								   },
							   });

export const { addTodo, toggleTodo, setFilter } = todosSlice.actions;
export const getTodos = (state: RootState) => {
	return state.todos.todos.filter(todo => {
		switch (state.todos.filter) {
			case FilterE.All:
				return todo;
			case FilterE.Active:
				return !todo.isDone && todo;
			case FilterE.Complete:
				return todo.isDone && todo;
			default:
				return;
		}
	});
};
export default todosSlice.reducer;