import { useEffect, useState } from "react";
import "./AddImprovementDialog.css";
import Resources from "../Models/Resources";
import { costs } from "../utils/cost";
import Benefit from "../Models/Benefit";
import { benefit } from "../utils/benefit";
import Improvement from "../Models/Improvement";

interface Props {
  onAdd: (modifySquare: Improvement, type: string) => void;
  cancel: () => void;
}

const AddImprovementDialog = ({ onAdd, cancel }: Props) => {
  const [type, setType] = useState("house");
  const [resource, setResource] = useState<Resources>(costs[0]);
  const [addBenefit, setAddBenefit] = useState<Benefit>(benefit[0]);
  useEffect(() => {
    if (type === "house") {
      setResource(costs[0]);
    } else if (type === "well") {
      setResource(costs[1]);
    } else if (type === "grain-farm") {
      setResource(costs[2]);
    } else if (type === "brain-farm") {
      setResource(costs[3]);
    } else if (type === "lumber-mill") {
      setResource(costs[4]);
    }
    if (type === "house") {
      setAddBenefit(benefit[0]);
    } else if (type === "grain-farm") {
      setAddBenefit(benefit[1]);
    } else if (type === "brain-farm") {
      setAddBenefit(benefit[2]);
    } else if (type === "lumber-mill") {
      setAddBenefit(benefit[3]);
    } else if (type === "well") {
      setAddBenefit(benefit[4]);
    }
  }, [type]);
  return (
    <section className="AddImprovementDialog">
      <h2>Add Improvements</h2>
      <div className="top-half">
        <form className="form">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            className="input-selector"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="house">House</option>
            <option value="well">Well</option>
            <option value="grain-farm">Grainz Farm</option>
            <option value="brain-farm">Brainz Farm</option>
            <option value="lumber-mill">Lumber Mill</option>
          </select>
        </form>
      </div>
      <div className="bottom-half">
        <div>
          <div className="benefit">
            <p className="benefit-label">Benefit:</p>
            <p className="benefit-num">
              {addBenefit.benefitNum} {addBenefit.benefitStr}
            </p>
          </div>
          <div className="addImprovementButtons">
            <button
              className="add-button"
              onClick={() => onAdd({ type, level: 1 }, type)}
            >
              Add
            </button>
            <button className="cancel-button" onClick={cancel}>
              Cancel
            </button>
          </div>
        </div>
        <div className="cost">
          <p className="cost-label">Cost:</p>
          <div className="cost-labels">
            <p>{resource.lumber} Lumber</p>
            <p>{resource.water} Water</p>
            <p>{resource.grain} Grainz</p>
            <p>{resource.brain} Unturned</p>
            <p>{1} Zombie</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddImprovementDialog;
