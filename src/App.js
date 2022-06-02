import './App.css';
import Counter from "./components/Counter";
import Increase from "./components/IncreaseCounter";
import Decrease from "./components/DecreaseCounter";
import IncreaseByTwo from "./components/IncreaseByTwoCounter";

function App() {
  return (
    <div>
      <Counter/>
      <Increase/>
      <Decrease/>
      <IncreaseByTwo/>
    </div>
  );
}

export default App;
