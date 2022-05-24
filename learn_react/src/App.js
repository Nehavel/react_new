import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      {/* call using function name */}
      <Greet name="Nehaaaaaaa">
        <p>This is children props</p>
      </Greet>
      <Welcome name="Nehaaaaaaa" />
    </div>
  );
}

export default App;
