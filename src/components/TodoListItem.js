import React from 'react'

function TodoListItem(props) {
  return (
    <div>
        <li className={props.completed}>
				<div className="view">
					<input className="toggle" type="checkbox"></input>
					<label>{props.itemName}</label>
					<button className="destroy"></button>
				</div>
			</li>
    </div>
  )
}

export default TodoListItem