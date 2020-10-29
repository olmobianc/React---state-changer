import logo from './logo.svg';
import './App.css';
import Tick from "./Tick"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tick />
      </header>
    </div>
  );
}

export default App;
