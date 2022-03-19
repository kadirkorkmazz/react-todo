import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form/Form';
import TodoList from './components/TodoList';


function App() {

  const [inputText, setInputText] = useState("")
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
    <section className="todoapp">
    <header className="header">

    {inputText}

    <Form tasks={tasks} setTasks={setTasks} inputText={inputText} setInputText={setInputText}/>
    </header>

    <section className="main">

    <TodoList/>
    <Footer/>
    </section>



        
</section>
    </div>
  );
}

export default App;
