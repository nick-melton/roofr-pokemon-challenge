import React, { useEffect } from 'react';
import '../assets/css/BattleField.css';
import Hero from './Hero';
import { useSelector, useDispatch } from 'react-redux'
import { setFirstHero, setSenondHero } from '../pokemonSlice';
import { getRandomNumber, capitalize, fetchData } from '../helpers'

function BattleField() {
  const firstHero = useSelector((state: any) => state.pokemon.firstHero);
  const secondHero = useSelector((state: any) => state.pokemon.secondHero);
  const dispatch = useDispatch();

  async function fetchPokemon(url: string) {
    const pokemon = await fetchData(url);

    const index = getRandomNumber(Math.random(), pokemon.moves.length);
    const move = await fetchData(pokemon.moves[index].move.url);

    return {
      name: capitalize(pokemon.name),
      attack: {
        name: capitalize(move.name),
        power: move.power ?? 0
      },
      sprite: pokemon.sprites.front_default
    };
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(async data => {
      const pokemons = data.results;

      const firstIndex = getRandomNumber(Math.random(), pokemons.length);
      const firstPokemon = await fetchPokemon(pokemons[firstIndex].url);
      dispatch(setFirstHero(firstPokemon));

      const secondIndex = getRandomNumber(Math.random(), pokemons.length);
      const secondPokemon = await fetchPokemon(pokemons[secondIndex].url);
      dispatch(setSenondHero(secondPokemon));
    });
  }, []);

  return (
    <div className="battle-field">
      { firstHero ? <Hero isLeftAligned={true} hero={firstHero}/> : null }
      { secondHero ? <Hero isLeftAligned={false} hero={secondHero}/> : null }
    </div>
  );
}

export default BattleField;
