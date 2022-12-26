import Btn from "../button";
import Clock from "./clock";
import "./_style.scss";
import { timeToSeconds } from "../../common/utils/time";
import { Task } from "../../types/Task";
import { useEffect, useState } from "react";

interface Props {
    selected: Task | undefined,
    finishTask: () => void
}

export default function Stopwatch({ selected, finishTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected?.time));
        }
    }, [selected])

    function stopwatchCount(count: number = 0) {
        setTimeout(() => {
          if (count > 0) { 
            setTime(count - 1);
            return stopwatchCount (count - 1);
          }
          finishTask();
        }, 1000)
    }

    return (
        <div className="stopwatch">
            <p className="title">Escolha um card para iniciar o cronômetro</p>
            <div className="stopwatchWrapper">
                <Clock time={time}/>
            </div>
            <Btn onClick={() => stopwatchCount(time)}>Iniciar</Btn>
        </div>
    )
}