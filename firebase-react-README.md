## STACK: Firebase + React 

### Sumary
1. [Requirements](#require)
1. [Setting up: React](#react)
1. [Setting up: Firebase](#firebase)
1. [Using the Database in a React component](#database)
    1. [Create Collection/Document](#database-create)
    1. [Read Collection/Document](#database-read)
    1. [Update Collection/Document](#database-update)
    1. [Delete Collection/Document](#database-delete)


<div id='require'/>

### Requirements
Before start to work with this stack you need to already have installed:
* [Node.js](https://nodejs.org/)
* [Npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

<div id='react'/>

### Setting Up: React

1. Install react globally
`npm install -g create-react-app `
1. Create your project
`create-react-app <project-name>`
1. Run the project
~~~~bash
cd <project-name> 
npm start
~~~~

<div id='firebase'/>

### Setting Up: Firebase

1. Access <https:/firebase.google.com>
1. Login with a google account and access the console
1. Create a project
1. Create an app
1. Install the firebase
``npm install firebase``
1. Copy the firebase output (configs and SDKs imports) and paste in the react project. The recommended is to create a separate file to  keep the access keys in a safe place (try using environment variables) 

1. If you created a separated file in the step before, don't forget to import them in the `/src/App.js`

1. Go back to firebase console and create a database in the firestore database, you can chose between the **prodution** or **test** environments. 
1. If you chose the **prodution environment**. You need to access the cloud firestore rules, in the upper tabs. Now update the database rules to allow reading and writing the database (`allow read, write: if true;`). You just need to keep like this while you are learning, you can (and should) change back when deploying or when you are setting up are real application.
1. If you chose the **test environment** just keep in mind that this environment will eventually expires and will need to be refreshed.
1. Go back to where you pasted the SDKs in the react project and add the imports to Firestore

~~~~js
import { initializeApp } from "firebase/app";
//others imports
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {...}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
~~~~

> Now you can access the firebase anywhere in your project, by importing 'db' from this file

<div id='database'/>

### Using the Database in a React component

In the `src/App.js` import the **db** from your file config and **collection, getDocs** from `'firebase/firestore'` to be able to manage the documents from the database. You also need to create a const to store your collection reference using the function ``collection(db, <collection name>)``

~~~~js
// others imports
import {db} from './firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  //set the references endpoint to the database
  const usersCollectionRef = collection(db, 'users');
  return (...);
}

export default App;
~~~~

To be able to manege a componet state in react you need to import **useState**, and to handle side effects in your component you will need import **useEffect** both from ``'react'``.

To initialize useState you can ``const [<property>, set<Property>] = useState("");`` For the useEffect you can  declare ``useEffect(<function>, <dependency>)`` the second argument is optional.

~~~~js
// others imports
import {useState, useEffect} from 'react';

function App() {
  //set users using immutability aka useState
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // here you can fetch data, directly updating the DOM, set timers.
  });

  return (...);
}

export default App;
~~~~

<div id='database-create'/>

#### Create Collection/documents

<div id='database-read'/>

#### Read Collection/documents

For reading documents from the database you should make use of **useEffect** to fetch data from a collection, and to handle the state of a proprety use **useState**.

To Fetch data from the data base you need  to create a new function that will handle this call to firestore using ``getDocs(<collection name reference>)``;

~~~~js
// imports
function App() {
  //set users using immutability aka useState
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //getUsers from database
    const getUsers = async ()=>{
      const data =  await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getUsers();
  }, [usersCollectionRef]);

  return (...);
}
~~~~
Now for display the data you just need to use the proprety with the ``{}`` inside of ``return``

~~~~js
return (
    <div>
      {/* write the data in screen */}
      { users.map((user) => {
        return (
          <div>
            <li>name: {user.name} - pokemon: {user.pokemon}</li>
          </div>
        );
      })}
    </div>
  );
~~~~

<div id='database-update'/>

#### Update Collection/documents

<div id='database-delete'/>

#### Delete Collection/documents
