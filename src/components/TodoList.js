import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList({tasks, setTasks, filteredTasks}) {


  return (
    <div>
        <input className="toggle-all" type="checkbox"></input>
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">

    {filteredTasks.map(task =>
 
<TodoListItem filteredTasks={filteredTasks} task={task} tasks={tasks} setTasks={setTasks} todoText={task.text} completed={task.completed} key={task.id}  />
 
)}

		</ul>
    </div>
  )
}


export default TodoList