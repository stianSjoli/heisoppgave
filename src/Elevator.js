import React,{useState} from 'react';
import {directions} from "./App";
import {Time} from "./App";
const Elevator = (props) => {
    const [pos,setPos] = useState(1.0);
    const floor = props.next;

    if(floor > pos) {
        setTimeout(() => {
            setPos(pos + 1);
            props.tracker({floor:pos + 1, direction:directions.UP});
          }, Time);
    } else if (floor < pos){  
        setTimeout(() => {
            setPos(pos - 1);
            props.tracker({floor:pos - 1, direction:directions.DOWN});
          }, Time);
    } 
    return <svg className="elevator">
        <g>
        <rect width="100" height="100" x="50" y="5"></rect>
        <text fontSize="36" x="100" textAnchor="middle" y="55"> {pos} </text>
        </g>
        </svg>
};

export default Elevator;

