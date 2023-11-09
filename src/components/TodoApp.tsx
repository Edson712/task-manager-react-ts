import { useState } from "react"
import { TaksList } from "./TaksList"

export const TodoApp = () => {

    const [newTask, setNewTask] = useState<string>('')
    const [taksList, setTaksList] = useState<string[]>([])

    const handleAddTask = () => {
        if (newTask.trim() === '') return
        setTaksList(oldTaks => [...oldTaks, newTask])
        setNewTask('')
    }

    const handleDeleteTask = (index: number) => {
        setTaksList(tasks => tasks.filter((_,i) => i !== index))
    }

    return (
        <div>
            <h1>Task Manager</h1>
            <div className="flex">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="New Task"
                />
                <button onClick={handleAddTask}>New Task</button>
            </div>
            <TaksList taksList={taksList} deleteTask={handleDeleteTask}></TaksList>
        </div>
    )
}