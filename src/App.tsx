import React, { useState } from 'react';
import Math from './Math';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const result = ["1", "i", "-1", "-i"][count % 4]

  const math = `e^{ ${count} i \\lambda} = ${result}`

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div style={{padding: "12px"}}>
      <p>
        <Math tex="\lambda = \small\frac \pi 2" />
      </p>
      <p onClick={() => setCount(count + 1)}>
        <Math tex={math} />
      </p>
    </div>
  );
}

export default App;
