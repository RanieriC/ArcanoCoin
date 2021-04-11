import logo from './image0.png';
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
        <a
          className="App-link"
          href="https://cdn.discordapp.com/attachments/726010929476534294/830831855393439814/arcano-qt-windows1.zip"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download our wallet
        </a>
      </header>
    </div>
  );
}

export default App;
