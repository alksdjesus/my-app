import logo from './logo.svg';
import './index.css';
import './App.css';

function App() {

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }  

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Aleksandre',
    lastName: 'De Jesus'
  };
  
  const element1 = (
    <h1>
      Good afternoon, {formatName(user)}
    </h1>
  );

  const name = 'Aleksandre';
  const element = <h1>Good evening, {name}</h1>;

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {element}
          Edit <code>src/App.js</code> and save to reload.
          Hello! This is my first edit on my React App.
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
    </div>
  );
}

export default App;
