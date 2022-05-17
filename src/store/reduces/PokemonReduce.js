import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../util/firebaseConfig';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';

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

const initialStateValue = [];

//set the references endpoint to the database
const collectionRef = collection(db, 'pokemons');

//get collection data from database
export const getPokemonDB = createAsyncThunk(
  'pokemon/getPokemonDB',
  async (_, thunkAPI, dispatch, getState) => {
    console.log('getPokemonDB');
    try {
      const data = await getDocs(collectionRef);

      const initialValue = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log('pokemon values from db', initialValue);

      return initialValue;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// THUNK
//get a pokemon from api
export const getPokemon = createAsyncThunk(
  'pokemon/getPokemon',
  async ({ name }, dispatch, getState) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (res) => res.json()
    );
    /* .then(() => dispatch(addPokemon({
      
        const poke = {
          number: res.id,
          name: res.name,
          species: res.name,
          types: res.types,
          level: 1,
          sprites: res.sprites.front_default,
      };
     
    }))); */
  }
);

export const pokemonSlice = createSlice({
  // STATE
  name: 'pokemon',
  initialState: {
    value: initialStateValue,
    status: null,
  },

  // ACTIONS
  reducers: {
    // synchronizePokemon: async (state, action) => {
    //   let docs = await getDocs(collectionRef)
    //   console.log(docs);
    //   // collectionRef.docs.onSnapshot((docs) => {
    //   //   console.log('oiii')
    //   //   console.log(docs)
    //   // })
    // },
    addPokemon: (state, action) => {
      addDoc(collectionRef, action.payload);
      state.value.push(action.payload);
    },
    updatePokemon: (state, action) => {
      const pokemonRef = doc(db, 'pokemons', action.payload.id);

      updateDoc(pokemonRef, {
        name: action.payload.name,
        level: action.payload.level,
      });

      state.value.map((pokemon) => {
        if (pokemon.id === action.payload.id) {
          pokemon.name = action.payload.name;
          pokemon.level = action.payload.level;
          /* pokemon.types = action.payload.types; */
        }
      });
    },
    deletePokemon: (state, action) => {
      const pokemonRef = doc(db, 'pokemons', action.payload.id);
      deleteDoc(pokemonRef);
      state.value = state.value.filter(
        (pokemon) => pokemon.id !== action.payload.id
      );
    },
  },

  // THUNK ACTIONS
  extraReducers: {
    [getPokemon.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPokemon.fulfilled]: (state, action) => {
      state.status = 'success';
      state.value = action.payload;
    },
    [getPokemon.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [getPokemonDB.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPokemonDB.fulfilled]: (state, action) => {
      state.status = 'success';
      state.value = action.payload;
    },
    [getPokemonDB.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// export reducers as actions
export const { synchronizePokemon, addPokemon, updatePokemon, deletePokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
