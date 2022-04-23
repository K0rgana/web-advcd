import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addPokemon,
  updatePokemon,
  deletePokemon,
} from '../store/reduces/PokemonReduce';

function Pokemon() {
  const dispatch = useDispatch();

  // get trainer state
  const pokemonList = useSelector((state) => state.pokemon.value);

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('');
  const [newLevel, setNewLevel] = useState('');

  return (
    <div className="container">
      <h1>Pokemon Page</h1>

      <div className="addPokemon">
        <input
          type="text"
          placeholder="Name..."
          className="username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="Type..."
          className="username"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          required
        />
        <button
          className="btn-success"
          onClick={() => {
            dispatch(
              addPokemon({
                id: pokemonList[pokemonList.length - 1].id + 1,
                name: name,
                types: type,
                level: 1,
                sprites:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
              })
            );
          }}
        >
          + Add
        </button>
      </div>

      <div className="displayPokemons">
        {console.log(pokemonList)}
        {pokemonList.map((poke) => {
          return (
            <div class="container">
              <div class="card">
                <div class="imgBx">
                  <img src="{poke.sprites}" alt="pokemon img" />
                </div>
                <div class="contentBx">
                  <h2>{poke.name}</h2>
                  <div class="desc">
                    <h3>
                      Id: {poke.id} - Number: {poke.id} - Level: {poke.level}
                    </h3>
                  </div>
                  <div class="desc">
                    <h3>Types: {poke.types}</h3>
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
                    <input
                      type="text"
                      placeholder="NewType..."
                      className="type"
                      value={newType}
                      onChange={(e) => {
                        setNewType(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div class="desc">
                    <button
                      className="btn-info"
                      onClick={() => {
                        dispatch(
                          updatePokemon({
                            id: poke.id,
                            name: newName,
                            level: newLevel,
                            types: newType,
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
