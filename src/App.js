import Palette from "./Palette";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/palette/:id" element={<Palette />} />
    </Routes>
  );
}

export default App;
