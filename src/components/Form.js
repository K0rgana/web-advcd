import React, { useState } from 'react';
import { db } from '../util/firebaseConfig';

import { collection, addDoc, Timestamp } from 'firebase/firestore';

function Form() {
  //set atributes using immutability aka useState
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [hp, setHp] = useState('');

  const createUser = async (e) => {
    //stop refesh page
    e.preventDefault();

    //set the references endpoint to the database
    const usersRef = collection(db, 'pokemons');
    //set document structure
    const user = {
      name: name,
      type: type,
      hp: hp,
      updated: Timestamp.now(),
      created: Timestamp.now(),
    };
    //create doc on firebase
    await addDoc(usersRef, user);
    // clean inputs
    setName('');
    setType('');
    setHp('');
  };
  const handleChangeName = (e) => {
    // update @Name const with input value
    setName(e.target.value);
  };
  const handleChangeType = (e) => {
    // update @type const with input value
    setType(e.target.value);
  };
  const handleChangeHp = (e) => {
    // update @hp const with input value
    setHp(e.target.value);
  };

  return (
    <form onSubmit={createUser}>
      <input
        type="text"
        placeholder="type name"
        className="username-input"
        value={name}
        required
        onChange={handleChangeName}
      />
      <input
        type="text"
        placeholder="type type"
        className="usertype-input"
        value={type}
        required
        onChange={handleChangeType}
      />
      <input
        type="text"
        placeholder="type hp"
        className="userhp-input"
        value={hp}
        required
        onChange={handleChangeHp}
      />

      <button className="button-insert" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
