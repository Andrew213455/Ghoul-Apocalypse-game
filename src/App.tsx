import React, { useEffect, useState } from "react";
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
  const [display, setDisplay] = useState(false);
  const [resourceLine, setResourceLine] = useState<ResourcesModel>({
    house: 0,
    lumberMill: 5,
    grainFarm: 5,
    well: 5,
    brainFarm: 1,
  });
  const [addBenefit, setAddBenefit] = useState(benefit[0]);
  const [addCost, setAddCost] = useState(costs[0]);
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
        copy.house = copy.house + addBenefit.benefitNum;
        copy.lumberMill = copy.lumberMill - addCost.lumber;
        copy.grainFarm = copy.grainFarm - addCost.grain;
        copy.well = copy.well - addCost.water;
        copy.brainFarm = copy.brainFarm - addCost.brain;
        return copy;
      });
      // } else if (
      //   currentSquare !== null &&
      //   squares[currentSquare].type === "well"
      // ) {
      //   setAddBenefit(benefit[4]);
      //   setAddCost(costs[1]);
      //   resourceLine[3].amount = resourceLine[3].amount + addBenefit.benefitNum;
      //   resourceLine[1].amount = resourceLine[1].amount - addCost.lumber;
      //   resourceLine[2].amount = resourceLine[2].amount - addCost.grain;
      //   resourceLine[4].amount = resourceLine[4].amount - addCost.brain;
      // } else if (
      //   currentSquare !== null &&
      //   squares[currentSquare].type === "grain-farm"
      // ) {
      //   setAddBenefit(benefit[1]);
      //   setAddCost(costs[2]);
      //   resourceLine[2].amount = resourceLine[2].amount + addBenefit.benefitNum;
      //   resourceLine[1].amount = resourceLine[1].amount - addCost.lumber;
      //   resourceLine[3].amount = resourceLine[3].amount - addCost.water;
      //   resourceLine[4].amount = resourceLine[4].amount - addCost.brain;
      // } else if (
      //   currentSquare !== null &&
      //   squares[currentSquare].type === "brain-farm"
      // ) {
      //   setAddBenefit(benefit[2]);
      //   setAddCost(costs[3]);
      //   resourceLine[4].amount = resourceLine[4].amount - addBenefit.benefitNum;
      //   resourceLine[1].amount = resourceLine[1].amount - addCost.lumber;
      //   resourceLine[2].amount = resourceLine[2].amount - addCost.grain;
      //   resourceLine[3].amount = resourceLine[3].amount - addCost.water;
      // } else if (
      //   currentSquare !== null &&
      //   squares[currentSquare].type === "lumber-mill"
      // ) {
      //   setAddBenefit(benefit[3]);
      //   setAddCost(costs[4]);
      //   resourceLine[1].amount = addBenefit.benefitNum;
      //   resourceLine[2].amount = resourceLine[2].amount - addCost.grain;
      //   resourceLine[3].amount = resourceLine[3].amount - addCost.water;
      //   resourceLine[4].amount = resourceLine[4].amount - addCost.brain;
    }
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
    setDisplay(false);
  };
  console.log(currentSquare);
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
          <EditImprovementDialog updateLevel={updateLevel} />
        </div>
      </div>
    </div>
  );
}

export default App;
