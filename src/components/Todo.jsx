import { useState } from "react"

const Todo = () => {
	const [tasks, setTasks] = useState([])
	const [taskInput, setTaskInput] = useState("")
	const [editIndex, setEditIndex] = useState(-1)

	const addTask = () => {
		if (taskInput.trim() !== "") {
			if (editIndex === -1) {
				setTasks([...tasks, taskInput])
			} else {
				const updatedTasks = [...tasks]
				updatedTasks[editIndex] = taskInput
				setTasks(updatedTasks)
				setEditIndex(-1)
			}
			setTaskInput("")
		}
	}

	const deleteTask = index => {
		const updatedTasks = [...tasks]
		updatedTasks.splice(index, 1)
		setTasks(updatedTasks)
	}

	const editTask = index => {
		setTaskInput(tasks[index])
		setEditIndex(index)
	}

	const cancelEdit = () => {
		setTaskInput("")
		setEditIndex(-1)
	}

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h1 className="text-center">To-Do List</h1>
					<form
						onSubmit={e => {
							e.preventDefault()
							addTask()
						}}
					>
						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Add or edit a task"
								value={taskInput}
								onChange={e => setTaskInput(e.target.value)}
							/>
							<button
								type="submit"
								className={` btn ${
									editIndex === -1 ? "btn-primary " : "btn-success "
								} `}
							>
								{editIndex === -1 ? "Add" : "Update"}
							</button>
							{editIndex !== -1 && (
								<button
									type="button"
									className="btn btn-danger"
									onClick={cancelEdit}
								>
									Cancel
								</button>
							)}
						</div>
					</form>
					<div className="tasks">
						{tasks.map((task, index) => (
							<div className="task alert alert-secondary" key={index}>
								<span>{task}</span>
								<button
									className="btn btn-danger ml-3"
									onClick={() => deleteTask(index)}
								>
									Delete
								</button>
								<button
									className="btn btn-info ml-3"
									onClick={() => editTask(index)}
								>
									Edit
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Todo
