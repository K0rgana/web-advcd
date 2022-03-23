import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';

import {db} from './firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  //set the references endpoint to the database
  const usersCollectionRef = collection(db, 'users');
  //set the users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //console.log(db);

    //getUsers from firestore
    const getUsers = async ()=>{
      const data =  await getDocs(usersCollectionRef);
      //console.log(data);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getUsers();

  }, [usersCollectionRef]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Korgana</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

{/* write the data in screen */}
      { users.map((user) => {
        return (
          <div>
            {" "}
            <li>name: {user.name} - pokemon: {user.pokemon}</li>
          </div>
        );
      })}
    </div>
  );
}

export default App;
