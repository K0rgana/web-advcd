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
  const [level, setLevel] = useState(1);
  const [selectOptions, setSelectOptions] = useState('');

  const [message, setMessage] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const [pokemonId, setPokemonId] = useState('');

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

  const handleSubmit = () => {
    setMessage('');
    if ((name && number && selectOptions) === '') {
      setMessage('All fields are required!');
      return;
    }
    if (isEditing) {
      dispatch(
        updatePokemon({
          id: pokemonId,
          name: name,
          number: number,
          types: selectOptions,
          level: level,
          sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`,
        })
      );
      setMessage('Pokemon updateded successfully!');
    } else {
      dispatch(
        addPokemon({
          name: name,
          number: number,
          types: selectOptions,
          level: level,
          sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`,
        })
      );
      setMessage('New Pokemon added successfully!');
    }
    setPokemonId('');
    setName('');
    setNumber('');
    setLevel(1);
    setSelectOptions('');
    setIsEditing(false);
  };

  return (
    <>
      <div className="formPokemon">
        <div className="addPokemon my-4 bg-white rounded p-5">
          {message && (
            <p className="bg-gray-100 rounded-lg text-md font-bold  text-center text-indigo-700 py-3 px-5 mb-4 mb-3">
              {message}
            </p>
          )}

          <input
            type="text"
            placeholder="Pokemon name (required)"
            className="bg-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Pokemon index number (required)"
            className="bg-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            required
          />

          <input
            type="number"
            placeholder="Pokemon level (required)"
            className="bg-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 my-2"
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
            required
          />

          <Select
            className="select"
            options={options}
            value={selectOptions}
            isMulti
            isClearable={true}
            isSearchable={true}
            onChange={(item) => {
              setSelectOptions(item);
            }}
          />

          <button
            onClick={handleSubmit}
            className="text-sm font-semibold leading-none text-white bg-indigo-700  rounded hover:bg-indigo-600 py-4 w-full my-2"
          >
            {isEditing ? 'Save' : '+ Add New Pokemon'}
          </button>
        </div>
      </div>
      <div className="displayPokemons">
        {console.log('pokelist', pokemonList)}

        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden my-4">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  No.
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Pokemon
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Level
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {pokemonList.map((poke, index) => {
                return (
                  <tr key={poke.id}>
                    <th className="text-gray-900 bg-white text-sm whitespace-no-wrap">
                      {index + 1}
                    </th>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full"
                            src={poke.sprites}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            <span className="font-semibold">
                              {' '}
                              #{poke.number}
                            </span>{' '}
                            {poke.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                        <span className="absolute inset-0 bg-stone-100 opacity-50 rounded-full"></span>
                        <span className="relative">{poke.level}</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {poke.types.map((type) => {
                        return (
                          <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                            <span className="absolute inset-0 bg-stone-200 opacity-50 rounded-full"></span>

                            <span key={type.id} className="relative">
                              {type.value}
                            </span>
                          </span>
                        );
                      })}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        className="rounded bg-indigo-500 py-1 px-1 text-xs text-white transition-all duration-150 ease-in-out hover:bg-indigo-600 w-full"
                        onClick={() => {
                          setIsEditing(true);
                          setPokemonId(poke.id);
                          setName(poke.name);
                          setNumber(poke.number);
                          setLevel(poke.level);
                          setSelectOptions(poke.types);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="rounded bg-red-500 py-1 px-1 text-xs text-white transition-all duration-150 ease-in-out hover:bg-red-600 w-full"
                        onClick={() => {
                          if (
                            window.confirm(
                              `Do you really want to delete #${poke.number} ${poke.name}?`
                            )
                          ) {
                            dispatch(deletePokemon({ id: poke.id }));
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Pokemon;
