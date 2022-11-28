import logo from './logo_bb.png';
import './App.css';
import Character_container from './components/Character_container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Character_container />
    </div>
  );
}

export default App;
