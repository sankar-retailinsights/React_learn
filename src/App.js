import logo from './logo.svg';
import './App.css';
import Fcomponent from './components/fcomponent';
import Classcomp from './components/Classcomp';
import Ftest from './components/ftest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Fcomponent heading="Calculator"/>
      <Classcomp name="Sankar" heroname="Superman">
        <h3>This is children component</h3>
      </Classcomp>
      <Ftest />
    </div>
  );
}

export default App;
