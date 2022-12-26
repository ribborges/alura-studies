import "./_style.scss";

interface Props {
    time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [dozenMinutes, unitMinutes] = String(minutes).padStart(2, '0');
    const [dozenSeconds, unitSeconds] = String(seconds).padStart(2, '0');

    return (
        <>
            <span className="clockNumber">{dozenMinutes}</span>
            <span className="clockNumber">{unitMinutes}</span>
            <span className="clockSeparator">:</span>
            <span className="clockNumber">{dozenSeconds}</span>
            <span className="clockNumber">{unitSeconds}</span>
        </>
    )
}