import logo from "./logo.png";
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapping">
          <header className="App-header">
            <div className="title">
              <h1>Dictionary SheCodes</h1>
            </div>
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              width="400"
              height={220}
            />
            <br />
          </header>
          <main>
            <Dictionary />
          </main>
          <footer className="text-center">Coded by Sefora Noata</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
