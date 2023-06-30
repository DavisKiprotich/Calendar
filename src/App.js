import React from 'react'
import './App.css';
import { getMonth } from './util.js'

function App() {
  console.table(getMonth())
  return (
    <React.Fragment>
      <div></div>
    </React.Fragment>
  );
}

export default App;
