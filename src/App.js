import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import FooterInfo from './components/FooterInfo';
import Form from './components/Form/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("")
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    handleFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks, status])

  const handleFilters = ()=> {
    switch (status) {
      case "active":
        setFilteredTasks(tasks.filter((element)=> element.completed !==true ));
        break;
      case "completed":
        setFilteredTasks(tasks.filter((element)=> element.completed ===true ));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  }

  return (
    <div className="App">
    <section className="todoapp">
    <header className="header">
    <Form tasks={tasks} setTasks={setTasks} inputText={inputText} setInputText={setInputText}/>
    </header>
    <section className="main">
    <TodoList setTasks={setTasks} tasks ={tasks} filteredTasks={filteredTasks} />
    <Footer tasks={tasks} setTasks={setTasks} setStatus={setStatus}  />
    </section>
    </section>
      <FooterInfo/>
    </div>
    
  );
}

export default App;
