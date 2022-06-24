import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Dictionary />
      <footer>
        This project was coded by{" "}
        <a
          href="https://focused-joliot-da009a.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Ranem Al-Haffar
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Ranem97/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-Source
        </a>
      </footer>
    </div>
  );
}

export default App;
