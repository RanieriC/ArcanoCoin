import logo from './image1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Arcano is <code>in beta </code>phase
        </p>
        <a
          className="App-link"
          href="https://arcano.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Arcano
        </a>
      </header>
    </div>
  );
}

export default App;