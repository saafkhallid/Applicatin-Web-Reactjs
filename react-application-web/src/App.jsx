import Header from './compenents/header'
import Tasks from './compenents/Tasks'
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor hiroko",
      day: "Feb 5th at 2:45pm",
      reminder: true,
    },
    {
      id: 2,
      text: "food shopping",
      day: "Feb 5th at 2:45pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Meeting at Shcool",
      day: "Feb 5th at 2:45pm",
      reminder: true,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
