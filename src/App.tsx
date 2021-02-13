import React from 'react';
import RewardsSummary from '../src/components/Rewards';
import './App.css';
import { HeaderWrapper } from './styled-components/styled-components';

function App() {
  return (
    <div className="App">
      <HeaderWrapper>Project Management Board</HeaderWrapper>
      <RewardsSummary dataSource='../../assets/data.json'/>
    </div>
  );
}

export default App;
