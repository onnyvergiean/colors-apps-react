import { Routes, Route } from "react-router-dom";
import NewPaletteForm from "./NewPaletteForm";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PaletteList />} />
      <Route path="/palette/:id" element={<Palette />} />
      <Route path="/palette/:id/:colorId" element={<SingleColorPalette />} />
      <Route path="/palette/new" element={<NewPaletteForm />} />
    </Routes>
  );
}

export default App;
