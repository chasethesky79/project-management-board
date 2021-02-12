import React from 'react';
import './App.css';
import ExportedBoard from '../src/containers/Board';
import ExportedTickets from '../src/containers/Tickets';
import { HeaderWrapper } from './styled-components/styled-components';

function App() {
  return (
    <div className="App">
      <HeaderWrapper>Project Management Board</HeaderWrapper>
      <ExportedBoard dataSource='../../assets/data.json'/>
      <ExportedTickets dataSource='../../assets/data.json'/>
    </div>
  );
}

export default App;
