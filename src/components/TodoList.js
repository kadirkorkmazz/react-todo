import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList() {
  return (
    <div>
        <input className="toggle-all" type="checkbox"></input>
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
            <TodoListItem itemName="Learn JS" completed="completed"/>
            <TodoListItem itemName="Learn Python" completed="false"/>
            <TodoListItem itemName="Learn CSS" completed="false"/>
            <TodoListItem itemName="Learn HTML" completed="false"/>
			
		</ul>
    </div>
  )
}

export default TodoList