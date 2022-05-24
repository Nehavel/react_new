import "./App.css";
import Greet from "./Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      {/* call using function name */}
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
