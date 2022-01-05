import logo from "./logo.svg";
import "./App.css";
import Button from "./components/lib/Button";
import Table from "./components/lib/Table";
import Collapse from "./components/lib/Collapse";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "todo 2",
      completed: false,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          onClick={function handleClick() {
            alert("5");
          }}
          title="Button 1"
          style={{ color: "red", backgroundColor: "blue" }}
        />
        <Button
          img={logo}
          variant="rounded"
          title="Button 2"
          onClick={function handleClick() {
            alert("6");
          }}
          style={{ color: "red", backgroundColor: "yellow" }}
        />
        <Button
          variant="round"
          img={logo}
          style={{ color: "red", backgroundColor: "green" }}
          onClick={function handleClick() {
            alert("7");
          }}
        />
        <Button
          variant="squared"
          title="Button 4"
          style={{}}
          onClick={function handleClick() {
            alert("8");
          }}
        />
        <Table nbLine={5} nbColumn={5} cellStyle={{ color: "red" }} />
        <Table
          nbLine={5}
          nbColumn={5}
          cellStyle={{ color: "green" }}
          CellComponent={<span>Test</span>}
        />
        <Collapse />
        <TodoList data={data} setData={setData} />
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
