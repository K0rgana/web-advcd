import React, { useState, useEffect } from 'react';

import { db } from '../util/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import User from './User';
import Form from './Form';

function PokeList() {
  //set atributes
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    //set the references endpoint to the database
    const pokemonsCollectionRef = collection(db, 'pokemons');

    //get collection data from database
    const getUsers = async () => {
      const data = await getDocs(pokemonsCollectionRef);
      setUsersList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div>
      <h2>Pokemons List</h2>
      <Form />

      {usersList
        ? usersList.map((user) => <User user={user} />)
        : 'can find anything'}
    </div>
  );
}

export default PokeList;
