
import Header from "./components/header";
import MacroInputs from "./components/macroInputs";
import AppBody from "./components/caloriesExplanation";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app-body">
        <AppBody />
        <MacroInputs />
      </div>
    </div>
  );
}

export default App;
