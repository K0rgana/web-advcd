import React, { useState } from 'react';

import { db } from '../util/firebaseConfig';
import { updateDoc, Timestamp, doc, deleteDoc } from 'firebase/firestore';

function User({ user }) {
  //set the references endpoint to the database
  const userRef = doc(db, 'pokemons', user.id);

  //sets atributes
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('');
  const [newHp, setNewHp] = useState('');
  //handle inputs changes
  const handleChangeName = (e) => {
    user.name = '';
    setNewName(e.target.value);
  };

  const handleChangeType = (e) => {
    user.type = '';
    setNewType(e.target.value);
  };

  const handleChangeHp = (e) => {
    user.hp = '';
    setNewHp(e.target.value);
  };

  //update doc
  const updateUser = async () => {
    await updateDoc(userRef, {
      name: newName,
      type: newType,
      hp: newHp,
      updated: Timestamp.now(),
    });
  };
  //delete doc
  const deleteUser = async () => {
    await deleteDoc(userRef);
  };

  return (
    <div className="user-card">
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Hp</th>
          <th>Updated at</th>
          <th>Created at</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Name"
              className="user-input"
              value={user.name === '' ? newName : user.name}
              onChange={handleChangeName}
              required
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Type"
              className="user-input"
              value={user.type === '' ? newType : user.type}
              onChange={handleChangeType}
              required
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Hp"
              className="user-input"
              value={user.hp === '' ? newHp : user.hp}
              onChange={handleChangeHp}
              required
            />
          </td>
          <td>
            {/* return timestamps */}
            {user.updated.toDate().toLocaleDateString('en-us')}
            {/* {user.updated.toDate().toTimeString()} */}
          </td>
          {/* <td>{user.created.toDate().toUTCString()}</td> */}
          <td>{user.created.toDate().toLocaleDateString('en-us')}</td>
          <td>
            <button className="button-update" onClick={updateUser}>
              Save Edit
            </button>
            <button className="button-delete" onClick={deleteUser}>
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default User;
