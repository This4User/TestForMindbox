import { FormControlLabel, Radio } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { TodoI } from "../../components/Todo/Todo";
import TodosList from "../../components/TodosList/TodosList";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { addTodo, FilterE, getTodos, setFilter, toggleTodo } from "../../Redux/Reducers/TodoReducer/TodosReducer";
import generateId from "../../utils";


const Todos: React.FunctionComponent = () => {
	const [ todoTitle, setTodoTitle ] = useState<string>("");
	const todos = useAppSelector(getTodos);

	const dispatch = useAppDispatch();
	const addNewTodo = () => {
		const newTodo: TodoI = {
			id: generateId(),
			title: todoTitle,
			isDone: false,
		};
		dispatch(addTodo(newTodo));
		setTodoTitle("");
	};
	const toggleNewTodo = (todo: TodoI) => {
		dispatch(toggleTodo(todo));
	};

	const changeCategory = (category: FilterE) => {
		dispatch(setFilter(category));
	};

	return (
		<div>
			<Input
				value={todoTitle}
				onChange={setTodoTitle}
				onAdd={addNewTodo}
			/>
			<TodosList
				todos={todos}
				onToggle={toggleNewTodo}
			/>
			<RadioGroup
				row
				aria-labelledby="filter"
				defaultValue="All"
				name="filter"
				onChange={(e) => {
					changeCategory(e.currentTarget.value as FilterE);
				}}
			>
				<FormControlLabel value={FilterE.All} control={<Radio/>} label="All"/>
				<FormControlLabel value={FilterE.Active} control={<Radio/>} label="Active"/>
				<FormControlLabel value={FilterE.Complete} control={<Radio/>} label="Complete"/>
			</RadioGroup>
		</div>
	);
};

export default Todos;