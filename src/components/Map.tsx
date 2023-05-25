import { useState } from "react";
import "./Map.css";
import Tile from "./Tile";

const Map = () => {
  const [square, setSquare] = useState([
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
  return (
    <div className="Map">
      {square.map((box, index) => (
        <Tile key={index} />
      ))}
    </div>
  );
};

export default Map;
