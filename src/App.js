import React from 'react';
import useBreakPoint from './custom-hooks/use-break-point';

import './style.css';

export default function App() {
  const point = useBreakPoint();

  return (
    <div>
      <h1>React useBreakPoint Hook!</h1>
      <p>
        Resize window to see how breakpoint is changing
        <span className="app-emoji">&#128521;</span>
      </p>
      <p className="app-text">
        &#9664;
        <span>Current Device Width:</span>
        <b className="app-breakpoint">{point}</b>
        &#9658;
      </p>
    </div>
  );
}
