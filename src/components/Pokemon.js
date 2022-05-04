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
    { id: 0, label: 'Fairy', value: 'Fairy' },
    { id: 1, label: 'Normal', value: 'Normal' },
    { id: 2, label: 'Fire', value: 'Fire' },
    { id: 3, label: 'Grass', value: 'Grass' },
    { id: 4, label: 'Electric', value: 'Electric' },
    { id: 5, label: 'Ice', value: 'Ice' },
    { id: 6, label: 'Fighting', value: 'Fighting' },
    { id: 7, label: 'Poison', value: 'Poison' },
    { id: 8, label: 'Ground', value: 'Ground' },
    { id: 9, label: 'Flying', value: 'Flying' },
    { id: 10, label: 'Psychic', value: 'Psychic' },
    { id: 11, label: 'Bug', value: 'Bug' },
    { id: 12, label: 'Rock', value: 'Rock' },
    { id: 13, label: 'Ghost', value: 'Ghost' },
    { id: 14, label: 'Dark', value: 'Dark' },
    { id: 15, label: 'Steel', value: 'Steel' },
    { id: 16, label: 'Dragon', value: 'Dragon' },
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
                        <div key={type.id}>{type.value}</div>
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
