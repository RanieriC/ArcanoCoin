import logo from './image2.png';
import './App.css';
// eslint-disable-next-line
var ReactCSSTransitionGroup = require('react-transition-group'); // ES5 with npm

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <em>
          Arcano is <code>in beta </code>phase . . .
        </em>
        <span>   ⠀ ‎‎   </span>
        <b>
          Welcome to Arcano
        </b>

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
