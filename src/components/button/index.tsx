import React from "react";
import './_style.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void,
    children?: React.ReactNode
} 

export default function Btn({ onClick, type, children}: Props) {
    return(
        <button onClick={onClick} type={type} className="btn">
            {children}
        </button>
    )
}