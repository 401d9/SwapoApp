import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/messenger">Messenger</Link>
        <Link to="/register">register</Link>
        <Link to="/profile">profile</Link>
        <Link to="/login">login</Link>
        <Link to="/home">home</Link>
        <Link to="/setting">Setting</Link>
      </header>
    </div>
  );
}

export default App;
