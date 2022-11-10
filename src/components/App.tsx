import { useState, useEffect, useRef } from 'react'
import { ITodo } from '../types/data'
import { TodoList } from "./TodoList";
import React from 'react'




export const App: React.FC =  () => {
    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState<ITodo[]>([])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTasks()
        }

    }


    const inputRef = useRef<HTMLInputElement>(null)

    const addTasks = () => {
        if (value) {
            setTasks([...tasks, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
        }
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    },[])

    const removeTodo = (id: number):  void => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    const toggleTodo = (id: number):  void => {
        setTasks(tasks.map(task => {
            if (task.id !== id) return task

        return {
            ...task,
            complete: !task.complete
        }}))
    }


    return(
        <div>
            <div>
                <input value={value} onChange={handleChange} ref={inputRef} onKeyDown={handleKeyDown}/>
                <button onClick={addTasks} >Add Todo</button>
            </div>
            <TodoList items={tasks} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    )
}