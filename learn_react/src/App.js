import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Message from "./components/Message";
function App() {
  return (
    <div className="App">
      {/* call using function name */}
      {/* props example */}
      <Greet name="Nehaaaaaaa">
        <p>This is children props</p>
      </Greet>
      {/* props with class */}
      <Welcome name="Nehaaaaaaa" />
      {/* state example */}
      <Message></Message>
      <Counter></Counter>
    </div>
  );
}

export default App;
