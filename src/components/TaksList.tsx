import { Task } from "./Task"

type Tasks = {
    taksList: string[]
    deleteTask: (index: number) => void
}

export const TaksList = ({ taksList, deleteTask }: Tasks) => {
    return (
        <div className="taskList">
            {taksList.map((task, index) => (
                <Task key={index} task={task} deleteTask={() => deleteTask(index)}></Task>
            ))}
        </div>
    )
}