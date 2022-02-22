import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NewPaletteForm from "./NewPaletteForm";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedColor from "./seedColor";
function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColor);

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };
  const deletePalette = (id) => {
    setPalettes(palettes.filter((palette) => palette.id !== id));
  };
  const syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  };
  useEffect(syncLocalStorage, [palettes]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PaletteList palettes={palettes} deletePalette={deletePalette} />
        }
      />
      <Route path="/palette/:id" element={<Palette palettes={palettes} />} />
      <Route
        path="/palette/:id/:colorId"
        element={<SingleColorPalette palettes={palettes} />}
      />
      <Route
        path="/palette/new"
        element={
          <NewPaletteForm savePalette={savePalette} palettes={palettes} />
        }
      />
    </Routes>
  );
}

export default App;
