import React from 'react'
import '../styles.css'
import { Task } from './model'
import SingleTask from './SingleTask'


interface Props {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TasksList: React.FC <Props> = ({tasks, setTasks}: Props) => {
  return (
    <div className='tasks'>
      {tasks.map((task) => 
      <SingleTask task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
      )}
    </div>
  )
}

export default TasksList