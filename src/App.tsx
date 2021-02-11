import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExportedBoard from '../src/containers/Board';

function App() {
  return (
    <div className="App">
      <ExportedBoard dataSource='../../assets/data.json'/>
    </div>
  );
}

export default App;
