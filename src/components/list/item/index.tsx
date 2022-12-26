import { Task } from '../../../types/Task';
import '../_style.scss';

interface Props extends Task {
    selectTask: (selectedTask: Task) => void
}

export default function Item({task, time, selected, completed, id, selectTask} : Props) {
    console.log('Current item: ', { task, time, selected, completed, id })
    return(
        <li 
        className={`${"item"} ${selected ? "itemSelecionado" : ""} ${completed ? "itemCompletado" : ''}`}
        onClick={() => !completed && selectTask(
            {
                task,
                time,
                selected,
                completed,
                id
            }
            )}
        >
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className="concluido" aria-label="tarefa completada"></span>}
        </li>
    )
}