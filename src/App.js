import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">DIC·TION·AR·Y</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a href="https://github.com/ariannabrunell"> Open-source code</a>
            {} by Arianna Brunell
          </small>
        </footer>
      </div>
    </div>
  );
}
