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
          Arcano is <code>in IMS Beta </code>phase . . .
        </em>
        <span>   ⠀ ‎‎   </span>
        <b>
          Welcome to Arcano
        </b>
<span>   ⠀ ‎‎   </span>
        <a
          className="App-link"
          href="https://discord.gg/8jXKnPQ8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply to join
        </a>
        <span>   ⠀ ‎‎   </span>
        <a
          className="App-linkd"
          href="https://discord.gg/8jXKnPQ8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our Discord </a> <em className="App-linkd"> for upcoming announcements</em>
        <span>   ⠀ ‎‎   </span>
        <a
          className="App-linkz"
          href="https://www.binance.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soon on Binance...
        </a>
        <span>   ⠀ ‎‎   </span>
        <a
          className="App-linkr"
          href="https://eprint.iacr.org/2015/1098.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          We're switching to RingCT!.
        </a>
      </header>
    </div>
  );
}

export default App;
