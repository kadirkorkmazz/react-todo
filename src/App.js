import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form/Form';
import TodoList from './components/TodoList';


function App() {

  const [inputText, setInputText] = useState("")
  const [tasks, setTasks] = useState([{text: "First Lesson", completed:false, id:33}]);

  return (
    <div className="App">
    <section className="todoapp">
    <header className="header">

    <Form tasks={tasks} setTasks={setTasks} inputText={inputText} setInputText={setInputText}/>
    </header>

    <section className="main">

    <TodoList tasks ={tasks} />
    <Footer/>
    </section>



        
</section>
    </div>
  );
}

export default App;
