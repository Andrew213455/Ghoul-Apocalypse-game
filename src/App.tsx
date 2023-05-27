import React, { useState } from "react";
import "./App.css";
import Map from "./components/Map";
import AddImprovementDialog from "./components/AddImprovementDialog";
import EditImprovementDialog from "./components/EditImprovementDialog";
import ResourcesView from "./components/ResourcesView";
import Improvement from "./Models/Improvement";

function App() {
  const [display, setDisplay] = useState(false);
  const [squares, setSquares] = useState<Improvement[]>([
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
    { type: "", level: 0 },
  ]);
  const [currentSquare, setCurrentSquare] = useState<number | null>(null);
  const modifySquare = (modifySquare: Improvement): void => {
    if (currentSquare !== null) {
      setSquares((prev) => [
        ...prev.slice(0, currentSquare),
        modifySquare,
        ...prev.slice(currentSquare + 1),
      ]);
    }
  };
  const openFormSetCurrentSquare = (index: number) => {
    setDisplay(true);
    setCurrentSquare(index);
  };
  console.log(squares);
  return (
    <div className="App">
      <div className="title">
        <h1>Ghoul Village</h1>
      </div>
      <div className="resourceView">
        <ResourcesView />
      </div>
      <div className="improvement">
        <div className="add">
          {display === true && <AddImprovementDialog onAdd={modifySquare} />}
        </div>
        <div className="mapContainer">
          <Map
            improvements={squares}
            setDisplay={openFormSetCurrentSquare}
            squareArray={squares}
            currentSquare={currentSquare}
          />
        </div>
        <div className="edit">
          <EditImprovementDialog />
        </div>
      </div>
    </div>
  );
}

export default App;
