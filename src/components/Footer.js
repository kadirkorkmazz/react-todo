import React from 'react'
import { useState } from 'react';


function Footer({setStatus, tasks, setTasks}) {
    const [isSelected, setIsSelected] = useState ("all");

    let activeTasks = (tasks.filter((element)=> element.completed !==true ));
    let activeTasksNumber = Object.keys(activeTasks).length;

    const handleStatus = (e)=> {
        if (e.target.className.includes("active")) {
            setStatus("active")
            setIsSelected("active")

        }else if(e.target.className.includes("completed")){
            setStatus("completed")
            setIsSelected("completed")

        }
         else if(e.target.className.includes("all")) {
            setStatus("all")
            setIsSelected("all")

        }
    }

    const handleClearComplete = ()=>{
        setTasks(tasks.filter((element)=> element.completed !==true ));
    }

  return (
    <div>
    <footer className="footer">
<span className="todo-count">
    <strong>{activeTasksNumber}</strong> 
     {activeTasksNumber <2 ? " item left" : " items left"}
</span>

<ul className="filters">
    <li>
        <button onClick={handleStatus} className= {`all ${isSelected === "all" ? "selected" :"" }`}>All</button>
    </li>
    <li>
        <button onClick={handleStatus} className={`active ${isSelected === "active" ? "selected" :"" }`}>Active</button>
    </li>
    <li>
        <button onClick={handleStatus} className={`completed ${isSelected === "completed" ? "selected" :"" }`}>Completed</button>
    </li>
</ul>

<button onClick={handleClearComplete} className="clear-completed">
    Clear completed
</button>
</footer>
    </div>
  )
}

export default Footer