import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import {
  addPokemon,
  updatePokemon,
  deletePokemon,
  getPokemonDB,
  synchronizePokemon,
} from '../store/reduces/PokemonReduce';

function Pokemon() {
  const dispatch = useDispatch();

  // get trainer state
  const pokemonList = useSelector((state) => state.pokemon.value);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [newName, setNewName] = useState('');
  const [newLevel, setNewLevel] = useState('');
  const [selectOptions, setSelectOptions] = useState('');

  //select pokemon types list
  const options = [
    { label: 'Normal', value: 'Normal' },
    { label: 'Fire', value: 'Fire' },
    { label: 'Grass', value: 'Grass' },
    { label: 'Electric', value: 'Electric' },
    { label: 'Ice', value: 'Ice' },
    { label: 'Fighting', value: 'Fighting' },
    { label: 'Poison', value: 'Poison' },
    { label: 'Ground', value: 'Ground' },
    { label: 'Flying', value: 'Flying' },
    { label: 'Psychic', value: 'Psychic' },
    { label: 'Bug', value: 'Bug' },
    { label: 'Rock', value: 'Rock' },
    { label: 'Ghost', value: 'Ghost' },
    { label: 'Dark', value: 'Dark' },
    { label: 'Steel', value: 'Steel' },
    { label: 'Dragon', value: 'Dragon' },
    { label: 'Fairy', value: 'Fairy' },
  ];
  // console.group('sync')
  // dispatch(synchronizePokemon());
  // console.groupEnd('sync')

  // useEffect(() => {
  //   console.log(pokeList.length)
  //   dispatch(getPokemonDB());
  //   console.log('here');
  //   return ()=> {
  //     console.log('dismount');
  //   }
  // }, []);

  return (
    <div className="container">
      <h1>Pokemon Page</h1>

      <div className="addPokemon">
        <input
          type="text"
          placeholder="Pokemon name (required)"
          className="username"
          value={name}
          /* value={name === '' ? newName : name} */
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="Pokemon index number (required)"
          className="username"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          required
        />

        <Select
          className="select"
          options={options}
          isMulti
          isClearable={true}
          isSearchable={true}
          onChange={(item) => {
            setSelectOptions(item);
          }}
        />

        {/* <button
          className="btn-success"
          onClick={() => {
            dispatch(getPokemon(name));
            console.log(name);
          }}
        >
          Search
        </button> */}
        <button
          className="btn-success"
          onClick={() => {
            dispatch(
              addPokemon({
                name: name,
                number: number,
                types: selectOptions,
                level: 1,
                sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`,
              })
            );
            setName('');
            setNumber('');
          }}
        >
          + Add
        </button>
      </div>

      <div className="displayPokemons">
        {console.log("pokelist", pokemonList)}

        {/* check if promice is resolved */}
        {pokemonList.map((poke) => {
          return (
            <div className="container" key={poke.id}>
              <div className="card">
                <div className="imgBx">
                  <img src={poke.sprites} alt="pokemon img" />
                </div>
                <div className="contentBx">
                  <h2>{poke.name}</h2>
                  <div className="desc">
                    <h3>
                      Id: {poke.id} - Number: {poke.number} - Level:{' '}
                      {poke.level}
                    </h3>
                  </div>
                  <div className="desc">
                    <h3>Types: {poke.types.map(type => {
                      return (
                        <div key={type.value}>{type.value}</div>
                      )
                    })}</h3>
                  </div>
                  {/* UPDATE INPUTS  */}
                  <div className="form">
                    <input
                      type="text"
                      placeholder="NewName..."
                      className="username"
                      value={newName}
                      onChange={(e) => {
                        setNewName(e.target.value);
                      }}
                      required
                    />
                    <input
                      type="number"
                      placeholder="NewLevel..."
                      className="level"
                      value={newLevel}
                      onChange={(e) => {
                        setNewLevel(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="desc">
                    <button
                      className="btn-info"
                      onClick={() => {
                        dispatch(
                          updatePokemon({
                            id: poke.id,
                            name: newName,
                            level: newLevel,
                          })
                        );
                        setNewName(name);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="btn-error"
                      onClick={() => {
                        dispatch(deletePokemon({ id: poke.id }));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pokemon;
