import { List } from "@mui/material";
import React from "react";
import Todo, { TodoI } from "../Todo/Todo";

export interface TodosListI {
	todos: Array<TodoI>;
	onToggle: Function;
}

const TodosList: React.FunctionComponent<TodosListI> = ({ todos, onToggle }) => {
	return (
		<List>
			{
				todos.map(todo => <Todo
					key={todo.id}
					todo={todo}
					onClick={() => {
						onToggle(todo);
					}}
				/>)
			}
		</List>
	);
};

export default TodosList;