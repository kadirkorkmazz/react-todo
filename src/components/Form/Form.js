import React from 'react'

function Form({tasks, setTasks, inputText, setInputText}) {

  function inputTextHandler(e) {
    e.preventDefault();
    setInputText(e.target.value);
  }

  const addTask=(e)=>{
    e.preventDefault();
    setTasks( [...tasks, {text: inputText, completed:false, id:Math.round(Math.random() * 10000)}]);
    setInputText("");
  }

  return (
      <div>
      <h1>todos</h1>
		<form onSubmit={addTask}>
			<input value={inputText} onChange={inputTextHandler}  className="new-todo" placeholder="What needs to be done?" autoFocus></input>
		</form>
      </div>

  )
}

export default Form