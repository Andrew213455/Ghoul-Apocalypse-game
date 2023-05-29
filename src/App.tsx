import React, { useState } from "react";
import "./App.css";
import Map from "./components/Map";
import AddImprovementDialog from "./components/AddImprovementDialog";
import EditImprovementDialog from "./components/EditImprovementDialog";
import ResourcesView from "./components/ResourcesView";
import Improvement from "./Models/Improvement";
import ResourcesModel from "./Models/ResourcesModel";
import { costs } from "./utils/cost";
import { benefit } from "./utils/benefit";
import zombie from "./images/zombienew.png";

function App() {
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [resourceLine, setResourceLine] = useState<ResourcesModel>({
    house: 4,
    lumberMill: 5,
    grainFarm: 5,
    well: 5,
    brainFarm: 1,
  });
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

  const updateLevel = () => {
    if (currentSquare !== null) {
      setSquares((prev) => {
        const copyOfSquares = [...prev];
        const copyOfSquare = { ...prev[currentSquare] };
        copyOfSquare.level++;
        copyOfSquares[currentSquare] = copyOfSquare;
        updateResources(copyOfSquare.type);
        return copyOfSquares;
      });
    }
  };

  const updateResources = (type: string) => {
    if (currentSquare !== null && type === "house") {
      console.log("hello");
      setResourceLine((prev) => {
        const copy = { ...prev };
        copy.house = copy.house + benefit[0].benefitNum;
        copy.lumberMill = copy.lumberMill - costs[0].lumber;
        copy.grainFarm = copy.grainFarm - costs[0].grain;
        copy.well = copy.well - costs[0].water;
        copy.brainFarm = copy.brainFarm - costs[0].brain;
        return copy;
      });
    } else if (currentSquare !== null && type === "well") {
      console.log(costs[1]);
      console.log(benefit[4]);
      setResourceLine((prev) => {
        const copy = { ...prev };
        copy.well = copy.well + benefit[4].benefitNum;
        copy.lumberMill = copy.lumberMill - costs[1].lumber;
        copy.grainFarm = copy.grainFarm - costs[1].grain;
        copy.house = copy.house - costs[1].brain; // might need to fix this?? i think it subtracts the same amount as if we had a people/ zombie resource line anyways idk
        copy.brainFarm = copy.brainFarm - costs[1].brain;
        return copy;
      });
    } else if (currentSquare !== null && type === "grain-farm") {
      setResourceLine((prev) => {
        const copy = { ...prev };
        copy.grainFarm = copy.grainFarm + benefit[1].benefitNum;
        copy.lumberMill = copy.lumberMill - costs[2].lumber;
        copy.well = copy.well - costs[2].water;
        copy.house = copy.house - costs[2].brain; // same thing
        copy.brainFarm = copy.brainFarm - costs[2].brain;
        return copy;
      });
    } else if (currentSquare !== null && type === "brain-farm") {
      setResourceLine((prev) => {
        const copy = { ...prev };
        copy.brainFarm = copy.brainFarm + benefit[2].benefitNum;
        copy.lumberMill = copy.lumberMill - costs[3].lumber;
        copy.well = copy.well - costs[3].water;
        copy.house = copy.house - costs[3].brain; // same thing
        copy.grainFarm = copy.grainFarm - costs[3].grain;
        return copy;
      });
    } else if (currentSquare !== null && type === "lumber-mill") {
      setResourceLine((prev) => {
        const copy = { ...prev };
        copy.lumberMill = copy.lumberMill + benefit[3].benefitNum;
        copy.well = copy.well - costs[4].water;
        copy.grainFarm = copy.grainFarm - costs[4].grain;
        copy.brainFarm = copy.brainFarm - costs[4].brain;
        copy.house = copy.house - costs[4].brain;
        return copy;
      });
    }
    setDisplayEditForm(false);
  };

  const modifySquare = (modifySquare: Improvement, type: string): void => {
    if (currentSquare !== null) {
      setSquares((prev) => [
        ...prev.slice(0, currentSquare),
        modifySquare,
        ...prev.slice(currentSquare + 1),
      ]);
    }
    updateResources(type);
    setDisplayAddForm(false);
  };
  const openFormSetCurrentSquare = (index: number) => {
    if (squares[index].type) {
      setDisplayEditForm(true);
      setDisplayAddForm(false);
    } else {
      setDisplayAddForm(true);
      setDisplayEditForm(false);
    }
    setCurrentSquare(index);
  };
  return (
    <div className="App">
      <div className="title">
        <h1>Ghoul Village</h1>
      </div>
      <img src={zombie} alt="" className="zombie" />
      <div className="resourceView">
        <ResourcesView
          resourceLine={resourceLine}
          squareArray={squares}
          currentSquare={currentSquare}
        />
      </div>
      <div className="improvement">
        <div className="add">
          {displayAddForm === true && (
            <AddImprovementDialog onAdd={modifySquare} />
          )}
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
          {displayEditForm === true && (
            <EditImprovementDialog
              updateLevel={updateLevel}
              squareArray={squares}
              currentSquare={currentSquare}
            />
          )}
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
