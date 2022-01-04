import logo from "./logo.svg";
import "./App.css";
import Button from "./components/lib/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          title="Button 1"
          style={{ color: "red", backgroundColor: "blue" }}
        />
        <Button
          title="Button 2"
          style={{ color: "red", backgroundColor: "yellow" }}
        />
        <Button
          title="Button 3"
          style={{ color: "red", backgroundColor: "green" }}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
