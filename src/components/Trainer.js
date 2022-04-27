import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addTrainer,
  updateTrainer,
  deleteTrainer,
} from '../store/reduces/TrainerReduce';

function  Trainer() {
  const dispatch = useDispatch();
  
  // get trainer state
  const trainerList = useSelector((state) => state.trainer.value);
  
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');
  return (
    <div className="container">
      <h1>Trainer Page</h1>

      <div className="addTrainer">
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
        <button
          className="btn-success"
          onClick={() => {
            dispatch(
              addTrainer({
                //  id: trainerList[trainerList.length - 1].id + 1,
                name: name,
                pokemonTeam: [],
                allPokemons: [],
              })
            );
          }}
        >
          + Add
        </button>
      </div>

      <div className="displayTrainers">
        {console.log(trainerList)}
        {/* check if promice is resolved */}
        {(typeof(trainerList) == Array ? trainerList : []).map((trn) => {
          return (
            <div className="container" key={trn.id}>
              <div className="card">
                <div className="imgBx">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg00.deviantart.net%2F4238%2Fi%2F2012%2F295%2Fe%2Fe%2Fpokedex_vector_style_by_cristopheros-d5imu6t.png&f=1&nofb=1"
                    alt="pokedex"
                  />
                </div>
                <div className="contentBx">
                  <h2>{trn.name}</h2>
                  <div className="desc">
                    <h3>Id: {trn.id}</h3>
                  </div>
                  <div className="desc">
                    <h3>Pokemon Team:</h3>

                    <h3> All Pokemons:</h3>
                  </div>

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
                  </div>
                  <div className="desc">
                    <button
                      className="btn-info"
                      onClick={() => {
                        dispatch(updateTrainer({ id: trn.id, name: newName }));
                        setNewName(name);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="btn-error"
                      onClick={() => {
                        dispatch(deleteTrainer({ id: trn.id }));
                      }}
                    >
                      Delete
                    </button>
                  </div>

                  {/* <a href="#">See profile</a> */}
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default Trainer;
