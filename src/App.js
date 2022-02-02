import logo from './logo.svg';
import './App.css';
import Signup from './page/Registration/Signup';
import Signin from './signin/Signin';


function App() {
  return (
    <div className="App">
    {/* <Signup /> */}
    <Signin />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
