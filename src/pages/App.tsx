import React, { useState } from 'react';
import Frm from '../components/form'
import List from '../components/list';
import Stopwatch from '../components/stopwatch';
import { Task } from '../types/Task';
import './_style.scss';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selected, setSelected] = useState<Task>();

  function selectTask(selectedTask: Task) {
    setSelected(selectedTask);
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function finishTask() {
    if(selected) {
        setSelected(undefined);
        setTasks(previousTasks =>
          previousTasks.map(task => {
            if(task.id === selected.id) {
                return {
                    ...task,
                    selecionado: false,
                    completado: true
                }
            }
            return task;
        }))
    }
  }

  return (
    <div className="AppStyle">
      <Frm setTasks={ setTasks }/>
      <List tasks={tasks} selectTask={selectTask}/>
      <Stopwatch selected={selected} finishTask={finishTask}/>
    </div>
  );
}