import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { db } from '../../util/firebaseConfig';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
} from 'firebase/firestore';

const initialStateValue = [];
//set the references endpoint to the database
const collectionRef = collection(db, 'users');

//get collection data from database
export const getUserDB = createAsyncThunk(
  'trainer/getUserDB',
  async (_, thunkAPI, dispatch, getState) => {
    console.log('getUserDB');
    try {
      const data = await getDocs(collectionRef);

      const initialValue = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log('user values from db', initialValue);

      return initialValue;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const getUserPokemonsDB = createAsyncThunk(
  'trainer/getUserPokemonsDB',
  async (_, thunkAPI, dispatch, getState) => {
    console.log('getUserPokemonsDB');
    try {
      /* Getting the current user's uid from the state and then using that uid to get the user's
      pokemons from the database. */
      const { uid } = thunkAPI.getState().auth.user;

      console.log('user', uid);
      const userPokemonsColRef = collection(db, 'users', uid, 'pokemons');
      const data = await getDocs(userPokemonsColRef);

      const initialValue = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log('user pokemon values from db', initialValue);

      return initialValue;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const trainerSlice = createSlice({
  // STATE
  name: 'trainer',
  initialState: {
    pokemons: [],
    value: initialStateValue,
    currentUser: JSON.parse(localStorage.getItem('user')) || [],
  },

  // ACTIONS
  reducers: {
    addTrainer: (state, action) => {
      /* Setting the document in the collection with the id of the user. */
      setDoc(doc(collectionRef, action.payload.uid), action.payload);
      //addDoc(collectionRef, action.payload);
      state.value.push(action.payload);
    },
    addTrainerPokemon: (state, action) => {
      /* Adding a pokemon to the trainer's pokemon collection. */
      const user = action.payload.userId;
      const userPokemonsColRef = collection(db, 'users', user, 'pokemons');
      addDoc(userPokemonsColRef, action.payload);
      state.pokemons.push(action.payload);
    },
    updateTrainer: (state, action) => {
      const userRef = doc(db, 'users', action.payload.id);

      updateDoc(userRef, {
        name: action.payload.name,
      });

      state.value.map((trainer) => {
        if (trainer.id === action.payload.id) {
          trainer.name = action.payload.name;
        }
      });
    },
    deleteTrainer: (state, action) => {
      const userRef = doc(db, 'users', action.payload.id);
      deleteDoc(userRef);
      state.value = state.value.filter(
        (trainer) => trainer.id !== action.payload.id
      );
    },
    loginTrainer: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutTrainer: (state, action) => {
      state.currentUser = () => {
        localStorage.clear();
      };
    },
  },
  // THUNK ACTIONS
  extraReducers: {
    [getUserDB.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getUserDB.fulfilled]: (state, action) => {
      state.status = 'success';
      state.value = action.payload;
    },
    [getUserDB.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [getUserPokemonsDB.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getUserPokemonsDB.fulfilled]: (state, action) => {
      state.status = 'success';
      state.pokemons = action.payload;
    },
    [getUserPokemonsDB.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// export reducers as actions
export const {
  addTrainer,
  updateTrainer,
  deleteTrainer,
  loginTrainer,
  logoutTrainer,
  addTrainerPokemon,
} = trainerSlice.actions;

export default trainerSlice.reducer;
