import { createSlice } from '@reduxjs/toolkit';

import { db } from '../../util/firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

/* const initialStateValue = [
  {
    id: 1,
    name: 'bulbasaur',
    types: 'grass',
    level: 1,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 4,
    name: 'charmander',
    types: 'fire',
    level: 1,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
]; */


//set the references endpoint to the database
const collectionRef = collection(db, 'pokemons');

//get collection data from database
const getData = async () => {
  const data = await getDocs(collectionRef);

  const initialValue = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(initialValue);
  return initialValue;
};

const initialStateValue = getData();

export const pokemonSlice = createSlice({
  // STATE
  name: 'pokemon',
  initialState: {
    value: initialStateValue,
  },

  // ACTIONS
  reducers: {
    addPokemon: (state, action) => {
      addDoc(collectionRef, action.payload);
      //state.value.push(action.payload);
    },
    updatePokemon: (state, action) => {
      state.value.map((pokemon) => {
        if (pokemon.id === action.payload.id) {
          pokemon.name = action.payload.name;
          pokemon.level = action.payload.level;
          pokemon.types = action.payload.types;
        }
      });
    },
    deletePokemon: (state, action) => {
      state.value = state.value.filter(
        (pokemon) => pokemon.id !== action.payload.id
      );
    },
  },
});

// export reducers as actions
export const { addPokemon, updatePokemon, deletePokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
