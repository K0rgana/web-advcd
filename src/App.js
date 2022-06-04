import Pokemon from './components/Pokemon';
import Trainer from './components/Trainer';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDB } from './store/reduces/PokemonReduce';
import { getUserDB } from './store/reduces/TrainerReduce';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.trainer.currentUser);

  useEffect(() => {
    dispatch(getPokemonDB());
    dispatch(getUserDB());
    console.log('%c will draw app', 'background: red; color: white');
    return () => {
      console.log('app remounted');
    };
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <div className="App">
      <Login />
      <Header />

      {/* <Trainer /> */}
      <Pokemon />
    </div>
  );
}

export default App;
