import { useState } from "react";
import Improvement from "../Models/Improvement";
import { benefit } from "../utils/benefit";
import { costs } from "../utils/cost";
import "./EditImprovementDialog.css";

interface Prop {
  updateLevel: () => void;
  squareArray: Improvement[];
  currentSquare: number | null;
}

const EditImprovementDialog = ({
  updateLevel,
  squareArray,
  currentSquare,
}: Prop) => {
  const [resource, setResource] = useState(costs[0]);
  const [addBenefit, setAddBenefit] = useState(benefit[0]);

  // const setCostSetBenefit = () => {
  //   if (currentSquare !== null && squareArray[currentSquare].type === "house") {
  //     setResource(costs[0]);
  //   } else if (
  //     currentSquare !== null &&
  //     squareArray[currentSquare].type === "well"
  //   ) {
  //     setResource(costs[1]);
  //   } else if (
  //     currentSquare !== null &&
  //     squareArray[currentSquare].type === "grain-farm"
  //   ) {
  //     setResource(costs[2]);
  //   } else if (
  //     currentSquare !== null &&
  //     squareArray[currentSquare].type === "brain-farm"
  //   ) {
  //     setResource(costs[3]);
  //   } else if (
  //     currentSquare !== null &&
  //     squareArray[currentSquare].type === "lumber-mill"
  //   ) {
  //     setResource(costs[4]);
  //   }
  //   if (currentSquare !== null && squareArray[currentSquare].type === "house") {
  //     setAddBenefit(benefit[0]);
  //   } else if (
  //     currentSquare !== null &&
  //     squareArray[currentSquare].type === "grain-farm"
  //   ) {
  //     setAddBenefit(benefit[1]);
  //   } else if (
  //     currentSquare !== null &&
  //     squareArray[currentSquare].type === "brain-farm"
  //   ) {
  //     setAddBenefit(benefit[2]);
  //   } else if (
  //     currentSquare !== null &&
  //     squareArray[currentSquare].type === "lumber-mill"
  //   ) {
  //     setAddBenefit(benefit[3]);
  //   } else if (
  //     currentSquare !== null &&
  //     squareArray[currentSquare].type === "well"
  //   ) {
  //     setAddBenefit(benefit[4]);
  //   }
  // };

  // setCostSetBenefit();
  return (
    <section className="EditImprovementDialog">
      <div className="edit-title">
        <h2>Edit Improvements</h2>
      </div>
      <div className="edit-improvements">
        <p className="edit-label">Type:</p>
        <p>{currentSquare !== null && squareArray[currentSquare].type}</p>
      </div>
      <div className="edit-improvements">
        <p className="edit-label">Level:</p>
        <p>{currentSquare !== null && squareArray[currentSquare].level + 1}</p>
      </div>
      <div className="edit-improvements">
        <p className="edit-label">Benefit:</p>
        <p>5 zombiez</p>
      </div>
      <div className="edit-improvements">
        <p className="edit-label">Cost:</p>
        <div className="edit-cost">
          <p className="edit-box">5 Lumber</p>
          <p>5 Water</p>
          <p className="edit-box">5 Grain</p>
          <p>1 Sheep</p>
        </div>
      </div>
      <div className="edit-button-container">
        <button className="edit-button" onClick={updateLevel}>
          Upgrade
        </button>
        <button className="edit-button">Downgrade</button>
        <button className="edit-button">Remove</button>
        <button className="edit-button">Close</button>
      </div>
    </section>
  );
};

export default EditImprovementDialog;
