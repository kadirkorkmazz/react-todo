import React from 'react'


function Footer({setStatus}) {

    const handleStatus = (e)=> {
        if (e.target.className.includes("active")) {
            setStatus("active")

        }else if(e.target.className.includes("completed")){
            setStatus("completed")

        }
         else if(e.target.className.includes("all")) {
            setStatus("all")
        }


    }

  return (
    <div>
    <footer className="footer">

<span className="todo-count">
    <strong>2 </strong> 
     items left
</span>

<ul className="filters">
    <li>
        <button onClick={handleStatus} className="all selected">All</button>
    </li>
    <li>
        <button onClick={handleStatus} className="active ">Active</button>
    </li>
    <li>
        <button onClick={handleStatus} className="completed ">Completed</button>
    </li>
</ul>

<button className="clear-completed">
    Clear completed
</button>
</footer>
    </div>
  )
}

export default Footer