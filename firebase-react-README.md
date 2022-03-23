## STACK: Firebase + React 

#### Setting Up: React

1. Install react globally
``npm install -g create-react-app ``
1. Create your project
``create-react-app <project-name>``
1. Run the project
```
cd <project-name> 
npm start
```
#### Setting Up: Firebase

1. Access https:/firebase.google.com
1. Login with a google account and access the console
1. Create a project
1. Create an app
1. Install the firebase
``npm install firebase``
1. Copy the firebase output (configs and SDKs imports) and paste in the react project and 
1. if pasted in a separated file, don't forget to import in the /src/App.js!
1. Go back to firebase console and create a database in the firestore database
1. Acess the rules to the cloud firestore, in the upper tabs.
1. Update the rules to allow reading and writing the database
1. Go back to where you pasted the SDKs in the react project and add the imports to Firestore
```
//others imports
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {...}

//others Initialize
export const db = getFirestore(app);
```
1. now you can access the firebase!

### Using the Database

in the `src/App.js` import the **db** from your file config and **collection, getDocs** from `'firebase/firestore'`

```
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

    //getUsers from firestore
    const getUsers = async ()=>{
      const data =  await getDocs(usersCollectionRef);
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

      //write the data in screen
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

```
