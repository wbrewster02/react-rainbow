import React, { useState } from "react";

import './App.css';
import ColorBlock from './colorblock';
import ColorForm from './ColorForm';

function App() {
  const [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

  let colorMap = colors.map((color, i) => {
    return(
      <ColorBlock key={i} color={color} />
    )
  })

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App"> 
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
