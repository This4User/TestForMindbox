import { TodoI } from "../../../components/Todo/Todo";
import generateId from "../../../utils";
import reducer, { addTodo, FilterE, setFilter } from "./TodosReducer";


test("should handle a todo being added to an empty list", () => {
	const previousState = {
		todos: [],
		filter: FilterE.All,
	};

	const newTodo: TodoI = {
		id: generateId(),
		title: "test",
		isDone: false,
	};

	expect(reducer(previousState, addTodo(newTodo))).toEqual({
																 todos: [
																	 newTodo,
																 ],
																 filter: FilterE.All,
															 });
});

test("should handle a todo being added to an existing list", () => {
	const prevTodo: TodoI = {
		id: generateId(),
		title: "test",
		isDone: false,
	};
	const previousState = {
		todos: [ prevTodo ],
		filter: FilterE.All,
	};
	const newTodo: TodoI = {
		id: generateId(),
		title: "test1",
		isDone: false,
	};

	expect(reducer(previousState, addTodo(newTodo))).toEqual({
																 todos: [
																	 prevTodo,
																	 newTodo,
																 ],
																 filter: FilterE.All,
															 });
});

test("should set a filter", () => {
	const previousState = {
		todos: [],
		filter: FilterE.All,
	};

	expect(reducer(previousState, setFilter(FilterE.Active))).toEqual({
																		  todos: [],
																		  filter: FilterE.Active,
																	  });
});