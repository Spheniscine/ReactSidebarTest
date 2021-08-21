import React, { useState } from 'react';
import Math from './Math';

function MathTest() {
    const [count, setCount] = useState(0)
  
    const result = ["1", "i", "-1", "-i"][count % 4]
  
    const math = `e^{ ${count} i \\lambda} = ${result}`
  
    return (
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