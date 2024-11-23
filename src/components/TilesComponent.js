import React from "react";
import Tile from "./Tile"; // Import the Tile component
import "../App.css";

const TilesComponent = () => {
  const tilesData = [
    {
      title: "Collaborate Seamlessly",
      description: "Raman.",
      backgroundColor: "#4caf50",
    },
    {
      title: "Simplify Access Management",
      description: "Easily manage access .",
      backgroundColor: "#2196f3",
    },
    {
      title: "Secure Your Data",
      description: "Robust encryption ",
      backgroundColor: "#f44336",
    },
  ];

  return (
    <div className="tiles-container">
      <h1>Efficient, Secure, and Reliable</h1>
      <div className="tiles-wrapper">
        {tilesData.map((tile, index) => (
          <Tile
            key={index}
            title={tile.title}
            description={tile.description}
            backgroundColor={tile.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
};

export default TilesComponent;
