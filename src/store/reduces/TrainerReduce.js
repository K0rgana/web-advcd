import { createSlice } from '@reduxjs/toolkit';

import { db } from '../../util/firebaseConfig';
import { collection, getDocs, addDoc} from 'firebase/firestore';

/* const initialStateValue = [
  {
    id: 0,
    name: '',
    pokemonTeam: [],
    allPokemons: [],
  },
  {
    id: 2,
    name: 'korgana',
    pokemonTeam: [],
    allPokemons: [],
  },
]; */

//set the references endpoint to the database
const collectionRef = collection(db, 'users');

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

export const trainerSlice = createSlice({
  // STATE
  name: 'trainer',
  initialState: {
    value: initialStateValue,
  },

  // ACTIONS
  reducers: {
    addTrainer: (state, action) => {
      addDoc(collectionRef, action.payload);
      //state.value.push(action.payload);
    },
    updateTrainer: (state, action) => {
      state.value.map((trainer) => {
        if (trainer.id === action.payload.id) {
          trainer.name = action.payload.name;
        }
      });
    },
    deleteTrainer: (state, action) => {
      state.value = state.value.filter(
        (trainer) => trainer.id !== action.payload.id
      );
    },
  },
});

// export reducers as actions
export const { addTrainer, updateTrainer, deleteTrainer } =
  trainerSlice.actions;

export default trainerSlice.reducer;
