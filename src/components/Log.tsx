import React from 'react';
import '../assets/css/Log.css';
import { useSelector } from 'react-redux'

function Log() {
  const log = useSelector((state: any) => state.pokemon.log)

  return (
    <div className="log-panel">{log}</div>
  );
}

export default Log;
