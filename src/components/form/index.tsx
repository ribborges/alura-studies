import React, { useState } from "react";
import { Task } from "../../types/Task";
import Btn from "../button";
import './_style.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export default function Form({ setTasks }: Props) {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");
  
    function addTask(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setTasks(tasksOld =>
        [
          ...tasksOld,
          {
            task,
            time,
            selected: false,
            completed: false,
            id: uuidv4()
          }
        ]
      );
      setTask("");
      setTime("00:00");
    }
  
    return (
      <form className="newTask" onSubmit={addTask}>
        <div className="inputContainer">
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
  
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={task}
            onChange={evento => setTask(evento.target.value)}
            placeholder="O que você quer estudar"
            required
          />
        </div>
  
        <div className="inputContainer">
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            onChange={(evento) => setTime(evento.target.value)}
            id="tempo"
            value={time}
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        
        <Btn type="submit">
          Adicionar
        </Btn>
      </form>
    )
  }