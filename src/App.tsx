import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Task } from './components/model';
import TasksList from './components/TasksList';


const App: React.FC = () => {

  const [task, setTask] = useState<string>("")
const [tasks, setTasks] = useState<Task[]>([])

const handleAddTask = (e: React.FormEvent<EventTarget>) => {
  e.preventDefault()
  if(task) {
    setTasks([...tasks, {id: Date.now(), task, isDone: false}])
    setTask("")
}
}
  return (
    <div className="App">
     <span className="heading">Taskify</span>
     <InputField task={task} setTask={setTask} handleAddTask={handleAddTask} />

     <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
