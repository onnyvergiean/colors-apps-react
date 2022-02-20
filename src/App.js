import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewPaletteForm from "./NewPaletteForm";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedColor from "./seedColor";
function App() {
  const [palettes, setPalettes] = useState(seedColor);
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={palettes} />} />
      <Route path="/palette/:id" element={<Palette palettes={palettes} />} />
      <Route
        path="/palette/:id/:colorId"
        element={<SingleColorPalette palettes={palettes} />}
      />
      <Route
        path="/palette/new"
        element={<NewPaletteForm savePalette={savePalette} />}
      />
    </Routes>
  );
}

export default App;
