import Header from "./compenents/header";
import Tasks from "./compenents/Tasks";
import AddTask from "./compenents/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask,setShowTask]=useState(false)
  const [tasks, setTasks] = useState([

  ]);




  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };



  //togele reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks,newTask])
    console.log(id);
    
  }


  return (
    <div className="container">
      <Header onAdd={() => setShowTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask &&  <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggel={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
