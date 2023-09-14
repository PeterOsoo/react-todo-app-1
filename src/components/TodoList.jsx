import { useState } from "react"
import Task from "./Task"

const TodoList = () => {
	const [tasks, setTasks] = useState([])
	const [newTask, setNewTask] = useState("")

	const addTask = () => {
		if (newTask.trim() !== "") {
			setTasks([...tasks, newTask])
			setNewTask("")
		}
	}

	const deleteTask = index => {
		const updatedTasks = [...tasks]
		updatedTasks.splice(index, 1)
		setTasks(updatedTasks)
	}

	const editTask = index => {
		const updatedTask = prompt("Edit task:", tasks[index])
		if (updatedTask !== null) {
			const updatedTasks = [...tasks]
			updatedTasks[index] = updatedTask
			setTasks(updatedTasks)
		}
	}

	return (
		<div className="todo-list">
			<h2>To-Do List</h2>
			<input
				type="text"
				placeholder="Add a new task"
				value={newTask}
				onChange={e => setNewTask(e.target.value)}
			/>
			<button onClick={addTask}>Add</button>
			<div className="tasks">
				{tasks.map((task, index) => (
					<Task
						key={index}
						task={task}
						onDelete={() => deleteTask(index)}
						onEdit={() => editTask(index)}
					/>
				))}
			</div>
		</div>
	)
}

export default TodoList
