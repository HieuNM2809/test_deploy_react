import React from 'react';
import List from './List';
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  console.log(process.env.NODE_ENVABC);
  return (
    <div className="main-section">
      <button onClick={() => setToggle(!toggle)}>Toggle  {process.env.REACT_APP_ENV}</button>
      {
        toggle ?
          <List/>
          : ''
      }

    </div>
  );
}

export default App;
