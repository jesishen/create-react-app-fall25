import logo from './logo.svg';
import './App.css';
import TestComponent from "./components/TestComponent";
import { useState } from 'react';

const Comp = () => {
  return <p>This is a comp component</p>
}

function App() {
  const [count, setCount] = useState(2);

  return (
    <div className="App" id='root'>
            <TestComponent />

      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Comp />
      <button
        onClick={() => setCount(count + 1)}
      >Click Me!</button>
        <div>{'🐱'.repeat(count)}</div>
        <p>name: Jessica Shen</p>
        <p>uniqname: jesishen</p>
      </header>
    </div>
  );
}

export default App;
