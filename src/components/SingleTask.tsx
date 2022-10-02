import React, { useEffect, useRef, useState } from 'react'
import { Task } from './model'
import { BiEditAlt } from 'react-icons/bi'
import { MdDownloadDone, MdDelete } from 'react-icons/md'
import '../styles.css'
import TasksList from './TasksList'

type Props = {
    task: Task
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask = ({ task, tasks, setTasks }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTask, setEditTask] = useState<string>(task.task)

    const handleDone = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task))
    }


    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setTasks(tasks.map(task => task.id === id ? { ...task, task: editTask } : task))
        setEdit(false)
    }

    const handleDelete = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
     inputRef.current?.focus()
    }, [edit])
    


    return (
        <form className='single__task' onSubmit={(e) => handleEdit(e, task.id)}>
            {edit ? (<input 
            ref={inputRef} 
            value={editTask} onChange={(e) => setEditTask(e.target.value)}
            className='single__task--text' />) :
                (
                    task.isDone ?
                        (<s className='single__task--text'>
                            {task.task}
                        </s>)
                        : (<span className='single__task--text'>
                            {task.task}
                        </span>)

                )}



            <div>

                <span className="icon" onClick={() => handleDone(task.id)}>
                    <MdDownloadDone />
                </span>
                <span className="icon" onClick={() => {
                    if (!edit && !task.isDone) {
                        setEdit(!edit)
                    }
                }
                }>
                    <BiEditAlt />
                </span>
                <span className="icon" onClick={() => handleDelete(task.id)}>
                    <MdDelete />
                </span>
            </div>
        </form>
    )
}

export default SingleTask