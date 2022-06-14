import { Checkbox, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

export interface TodoI {
	id: string;
	title: string;
	isDone: boolean;
}

export interface TodoComponentI {
	todo: TodoI;
	onClick: Function;
}

const Todo: React.FunctionComponent<TodoComponentI> = ({ todo, onClick }) => {
	return (
		<ListItem
			key={todo.id}
			onClick={() => {
				onClick();
			}}
		>
			<ListItemIcon>
				<Checkbox
					checked={todo.isDone}
					tabIndex={-1}
					disableRipple
				/>
			</ListItemIcon>
			{
				todo.isDone ? <ListItemText
					secondary={todo.title}
				/> : <ListItemText
					primary={todo.title}
				/>
			}
		</ListItem>
	);

};

export default Todo;