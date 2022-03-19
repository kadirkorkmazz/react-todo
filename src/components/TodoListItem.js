import React from 'react'

function TodoListItem({todoText, completed, id}) {
  return (
    <div>
        <li className= {completed ? "completed" : "uncomplited"} >
				<div className="view">
					<input id={id} className="toggle" type="checkbox"></input>
					<label>{todoText}</label>
					<button className="destroy"></button>
				</div>
			</li>
    </div>
  )
}

export default TodoListItem