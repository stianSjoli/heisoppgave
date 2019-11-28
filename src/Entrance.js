import React from 'react';

const Entrance = (props) => {
     
    const handleClick = () => {
        props.control(props.floor);
    };

    return <svg className="entrance" version="1.1" id="Layer_1" x="0px" y="0px"
         viewBox="0 0 512 512">
    <rect id="elevator" x="14.894" y="8.35" width="482.215" height="495.297"/>
    <rect id="elevator-door-frame" x="99.147" y="96.708" width="313.694" height="406.939"/>
    <rect className="elevator-door" x="112.552" y="110.102" width="286.906" height="393.546"/>
    <rect className="elevator-door" x="251.156" y="110.102" width="9.703" height="393.546"/>
    <g>
    <rect className="elevator-sign" x="112.588" y="28.151" width="70.821" height="54.207"/>
    <text id="floor" x="130" y="75">{props.tracker.floor}</text>
    </g>
    <g>
    <rect className="elevator-sign" x="320.588" y="28.151" width="90.821" height="54.207"/>
    <text id="floor" fontSize="11" x="340" y="75">{props.tracker.direction}</text>
    </g>
    <g>
    <rect className="elevator-sign" x="220.588" y="28.151" width="70.821" height="54.207"/>
    <text id="floor" fontSize="11" x="240" y="75">{Math.abs(props.floor - props.tracker.floor)*2}</text>
    </g>
    <g>
    <rect className="elevator-button" x="427.482" y="246.814" width="50.907" height="108.064" onClick={handleClick}/>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
};

export default Entrance;

