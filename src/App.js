import { Routes, Route } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaletteList />} />
      <Route path="/palette/:id" element={<Palette />} />
      <Route
        path="/palette/:id/:colorId"
        element={<h1>Single Color Page</h1>}
      />
    </Routes>
  );
}

export default App;
