import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Map";
import AddImprovementDialog from "./components/AddImprovementDialog";
import EditImprovementDialog from "./components/EditImprovementDialog";
import ResourcesView from "./components/ResourcesView";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Ghoul Village</h1>
      </div>
      <div className="resourceView">
        <ResourcesView />
      </div>
      <div className="improvement">
        <AddImprovementDialog />
        <div className="mapContainer">
          <Map />
        </div>
        <EditImprovementDialog />
      </div>
    </div>
  );
}

export default App;
