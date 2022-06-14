import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import "./Input.css";

interface InputI {
	value: string;
	onChange: Function;
	onAdd: Function;
}

const Input: React.FunctionComponent<InputI> = ({ value, onChange, onAdd }) => {
	return (
		<div className="inputContainer">
			<TextField
				label="What needs to be done?"
				value={value}
				onChange={(e) => {
					onChange(e.currentTarget.value);
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						onAdd(value);
					}
				}}
			/>
			<IconButton
				role="button"
				onClick={() => {
				if (value.length !== 0) {
					onAdd(value);
				}
			}}>
				<AddRoundedIcon/>
			</IconButton>
		</div>
	);
};

export default Input;