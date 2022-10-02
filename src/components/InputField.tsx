import React, { useRef } from 'react'
import '../styles.css'

interface Props {
    task: string
    setTask: React.Dispatch<React.SetStateAction<string>>
    handleAddTask: (e: React.FormEvent) => void

}

const InputField: React.FC<Props> = ({task, setTask, handleAddTask}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input_field' onSubmit={(e) => {
        handleAddTask(e)
        inputRef.current?.blur()
    }}>
        <input  type='input'
        ref={inputRef} 
                value={task}
                onChange={e => setTask(e.target.value)}
                placeholder='Enter a task' 
                className='input__box' />
        <button className='input_submit' 
                type='submit'> ADD</button>
    </form>
  )
}

export default InputField