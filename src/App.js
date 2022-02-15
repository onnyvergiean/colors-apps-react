import Palette from "./Palette";
import seedColor from "./seedColor";
import { generatePalette } from "./colorHelper";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/palette/:id" />
    </Routes>
  );
}

export default App;
