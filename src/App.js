import Palette from "./Palette";
import seedColor from "./seedColor";
import { generatePalette } from "./colorHelper";
function App() {
  return (
    console.log(generatePalette(seedColor[4])),
    (
      <div>
        <Palette {...seedColor[4]} />
      </div>
    )
  );
}

export default App;
