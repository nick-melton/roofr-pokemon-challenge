import React from 'react';
import '../assets/css/MainFrame.css';
import BattleField from './BattleField';
import ActionPanel from './ActionPanel';

function MainFrame() {
  return (
    <div>
      <BattleField/>
      <ActionPanel/>
    </div>
  );
}

export default MainFrame;
