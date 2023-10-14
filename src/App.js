import logo from "./logo.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapping">
      <header className="App-header">
        <img src ={logo} classname="App-logo" alt="logo" width="500" height={220}/>
        <br/>
        Hello
      </header>
      </div>
    </div>
  );
}

export default App;
