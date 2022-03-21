import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList({tasks, setTasks}) {


  return (
    <div>
        <input className="toggle-all" type="checkbox"></input>
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">

    {tasks.map(task =>
 
    
<TodoListItem task={task} tasks={tasks} setTasks={setTasks} todoText={task.text} completed={task.completed} key={task.id}  />
 
)}

		</ul>
    </div>
  )
}


export default TodoList