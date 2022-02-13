import Palette from "./Palette";
import seedColor from "./seedColor";
import { generatePalette } from "./colorHelper";

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColor[4])} />
    </div>
  );
}

export default App;
