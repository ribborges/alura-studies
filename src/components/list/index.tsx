import { Task } from "../../types/Task";
import Item from "./item";
import './_style.scss';

interface Props {
    tasks: Task[],
    selectTask: (tarefaSelecionada: Task) => void 
}

export default function List({ tasks, selectTask }: Props) {
    return (
        <aside className="taskList">
            <h2> Estudos do dia </h2>
            <ul>
                {tasks.map(item => (
                    <Item selectTask={selectTask} key={item.id} {...item} />
                ))}
            </ul>
        </aside>
    )
}