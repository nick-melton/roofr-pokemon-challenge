import React from 'react';
import '../assets/css/ActionPanel.css';
import Log from './Log';
import { setLog } from '../pokemonSlice'
import { useDispatch, useSelector } from 'react-redux'

function Panel() {
  const dispatch = useDispatch();
  const firstHero = useSelector((state: any) => state.pokemon.firstHero);
  const secondHero = useSelector((state: any) => state.pokemon.secondHero);

  function fight() {
    let log = '';
    const firstPower = firstHero.attack.power, secondPower = secondHero.attack.power;

    if(firstPower > secondPower) {
      log = `${firstHero.name} lands a decisive blow with ${firstHero.attack.name} knocking out ${secondHero.name}!`;
    } else if(firstPower < secondPower) {
      log = `${secondHero.name} lands a decisive blow with ${secondHero.attack.name} knocking out ${firstHero.name}!`;
    } else {
      log = 'Draw!';
    }

    dispatch(setLog(log));
  }

  return (
    <div className="action-panel">
        <h2 className='title'>Battle Log</h2>
        <div className='log-block'>
          <Log/>
          <button
            id="battle-btn"
            onClick={() => fight()}
          >Start battle!</button>
        </div>
    </div>
  );
}

export default Panel;
