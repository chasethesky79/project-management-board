import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExportedBoard from '../src/containers/Board';
import ExportedTickets from '../src/containers/Tickets';

function App() {
  return (
    <div className="App">
      <ExportedBoard dataSource='../../assets/data.json'/>
      <ExportedTickets dataSource='../../assets/data.json'/>
    </div>
  );
}

export default App;
