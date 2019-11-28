import React,{useState} from 'react';
import './App.css';
import Elevator from "./Elevator";
import Entrance from "./Entrance";

export const Time = 2000;

export const directions = {
  "STAY": "S",
  "UP": "U",
  "DOWN": "D"
};


const App = () => {
  const [pos, setPos] = useState({floor:1, direction:directions.STAY});
  const [next, setNext] = useState(1);
  const [stopp,setStopp] = useState(false);
  if(pos.floor === next && pos.direction !== directions.STAY) {
    setPos({floor:pos.floor, direction:directions.STAY})
  }

  return (
    <div className="container">
      <div className="text-container">
      Dette er en naiv representasjon av et heissystem. Man trykker på de oransje knappene for å få heisen til å komme til etasjen. Retning angis som S(tay), U(p), D(own) i svart boks til høyre, midterste boks viser estimert tid til etasjen, og boksen helt til venstre viser etasjen til heisen. Heisen viser sin etasje i rødt. Stopp-knappen stopper heisen på en soft-måte ved at det tillates at heisen går til sin nærmeste etasje.
      </div>
      <button onClick={() => setStopp(true)}> STOPP </button>  
    <div> 
    {stopp ? <Elevator tracker={pos => setPos(pos)} next={pos} />:<Elevator tracker={pos => setPos(pos)} next={next}/>}
    </div>
    <div className="building">
      <Entrance floor={4} tracker={pos} control={order => setNext(order)}/>
      <Entrance floor={3} tracker={pos} control={order => setNext(order)}/>
      <Entrance floor={2} tracker={pos} control={order=> setNext(order)}/>
      <Entrance floor={1} tracker={pos} control={order=> setNext(order)}/>
    </div>
    </div>
  );
}

export default App;
