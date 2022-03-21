import React from 'react'
function TodoListItem({todoText, id, setTasks, tasks, task, completed}) {


	const handleDelete=(e)=> {
		setTasks( tasks.filter((element)=> element.id !==task.id ));

	}
		const handleComplete = () => {
			setTasks(tasks.map((item)=>{

				if (item.id === task.id) {
					return {
						...item, completed: !item.completed
					}
				}
				return item;

			}))

		}

  return (
    <div>
        <li className= {completed ? "completed" : ""} >
				<div className="view">
					<input onClick={handleComplete} id={id} className="toggle" type="checkbox"  ></input>
					<label>{todoText}</label>
					<button className="destroy" onClick={handleDelete}></button>
				</div>
			</li>
    </div>
  )
}

export default TodoListItem