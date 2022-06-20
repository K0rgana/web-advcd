<div id="top"></div>

<h3 align="center">Pokehub</h3>

  <p align="center">
    Pokehub is app for register pokemons.
    <br />
    <a href="https://github.com/K0rgana/web-advcd">View Demo</a>
    ·
    <a href="https://github.com/K0rgana/web-advcd"><strong>Read the tutorial »</strong></a>
    <br />

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Summary</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#run-the-project">Run the project</a></li>
      </ul>
    </li>
    <li><a href="#build-your-own-app">Build Your Own App</a></li>
    <ul>
      <li><a href="#starting-react">Starting React</a></li>
      <li><a href="#starting-firebase">Starting Firebase</a></li>
      <li><a href="#starting-tailwind">Starting Tailwind</a></li>
      <li><a href="#creating-react-components">Creating react components</a></li>
      <ul>
        <li><a href="#login-component">Login component</a></li>
        <li><a href="#header-component">Header component</a></li>
        <li><a href="#pokemon-component">Pokemon component</a></li>
     </ul>
      <li><a href="#starting-redux">Starting Redux</a></li>
      <li><a href="#firebase-actions">Firebase Actions</a></li>
     </ul>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Pokehub is app for register pokemons. The proposite of this project is to study the tecnology of React and Firebase as Development Stack and analise they advanges and limitations.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind](https://tailwindcss.com)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

The first steps in here are to run the application and you try to recreate on your own.

### Requirements

Before start to follow the tutorial or run this project you need to already have installed:

- [Node.js](https://nodejs.org/)
- [Npm](https://www.npmjs.com/)

### Run the project

1. Clone this repo
   ```bash
   git clone https://github.com/K0rgana/web-advcd.git
   ```
1. Install the packages
   ```bash
   npm install
   ```
1. See runnig
   ```bash
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Build Your Own App

Now the following tutorial will guide you how to build a equal application to that you just saw.

## Starting React

1. Install react globally
   ```bash
    npm install -g create-react-app
   ```
1. Create your project
   ```bash
    create-react-app <project-name>
   ```
1. Run the project and will open a new browser window
   ```bash
    cd <project-name>
    npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Starting Firebase

1. Access <https:/firebase.google.com>
1. Login with a google account and access the console
1. Create a project
1. Create an app
1. Install the firebase
   `npm install firebase`
1. Copy the firebase output (configs and SDKs imports) and paste in the react project. The recommended is to create a separate file to keep the access keys in a safe place (try using environment variables). For this project, inside the `scr` folder, create a new folder `util` and inside create a new file `firebaseConfig.js`

1. Go back to firebase console and create a database in the firestore database, you can chose between the **prodution** or **test** environments.
1. If you chose the **prodution environment**. You need to access the cloud firestore rules, in the upper tabs. Now update the database rules to allow reading and writing the database (`allow read, write: if true;`). You just need to keep like this while you are learning, you can (and should) change back when deploying or when you are setting up are real application.
1. If you chose the **test environment** just keep in mind that this environment will eventually expires and will need to be refreshed.
1. Go back to where you pasted the SDKs in the react project, in this case the file `/src/util/firebaseConfig.js`, and add the imports to Firestore. It should look something like this:

   ```js
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";

   const firebaseConfig = {...}

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   ```

> Now you can access the firebase anywhere in the project, by importing 'db'

- If you created a separated file in the steps before you can import the file doing somenthing like this:

  ```js
  import { db } from '../../util/firebaseConfig';
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Starting Tailwind

For style the app we will use the framework css tailwind. To strat using you can make a full instalation or just import the CDN link in this file `/public/index.html` inside the html tag `head`. Like this:

```html
<html lang="en">
  <head>
    <script src="https://cdn.tailwindcss.com"></script>

    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
</html>
```

> Now you can style any html tag in the project, by adding a className propreaty

- You can style the html tags doing somenthing like this:

  ```html
  <button
    className="rounded bg-red-500 py-1 px-5 text-xs text-white transition-all duration-150 ease-in-out hover:bg-red-600"
  >
    btn
  </button>
  ```

  <p align="right">(<a href="#top">back to top</a>)</p>

<!-- REACT COMPONENTS -->

## Creating react components

Now we will create some react components. Inside the `scr` folder, create a new folder with the name `components` in this folder we will create the components `Login`, `Header` and `Pokemon`.

Before to start to create the components, here are some breve react concepts tha you should know:

- Proposit of Component: A component is a piece of code that when exported can bem reuse in another parts of the code
- Basic structure of a componet: The structure is similar to a function that will return a htlm code. Look like this:

  ```js
  function Component () {
    return (
      // html code
    );
  };
  export default Component;
  ```

- React hooks: Hooks are function components that allow to have access to state and other React features. We will use just 2 hooks in this project, they are:

  - `useState` Hook: Allows us to track state in a function component. This states can be pass to other (children) components as a prop. The hook accepts an initial state and returns two values:

    - The current state.
    - A function that updates the state.

  - `useEffect` Hook: Allows you to perform side effects as fetch data, trigger DOM Events, and set timers in your components. The hook has one mandatory argument, accepts a function.

  See a exemple to how to use them, this will set a state varible ´count´ and update the value at every second:

  ```js
  // Importing the useState and useEffect hooks from the React library.
  import { useState, useEffect } from 'react';

  function Component() {
    // Using the useState hook to create a state variable @count (with the initial value as 0) and a function to update it called setCount.
    const [count, setCount] = useState(0);

    // Using the useEffect hook to increment @count by 1 every second.
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });

    // the React component that renders a html tag @count.
    return (
      <>
        <h1>I've rendered {count} times!</h1>;
      </>
    );
    export default Component;
  }
  ```

  > Now you're already know everyting to start to creating app components!

<p align="right">(<a href="#top">back to top</a>)</p>

### Login component

For the Login component we will create a form that will login and register the user in the firebase. Follow the steps:

1. Create a new file in the `components` folder with the name `Login.js`
1. Write a basic react component structure, should be a function that return a html code
1. Add html form that contains `email` and `password` inputs and two `buttons` one for `login` and another one for `register`, you also can add a `button` for `continue with google` inside the `return`
1. Should look like this:

   ```js
   const Login = () => {
     return (
       <div className="my-4 bg-white rounded p-5">
         <p className="text-xl font-bold text-gray-800 my-1">
           Login to your account
         </p>
         <form>
           <input
             type="email"
             placeholder="email"
             className="bg-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
           />
           <input
             type="password"
             placeholder="password"
             className="bg-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
           />
           <button
             className="text-sm font-semibold leading-none text-white bg-indigo-700  rounded hover:bg-indigo-600 py-4 w-full my-2"
             type="submit"
           >
             Login
           </button>
           <p className="text-xl text-center text-gray-600 my-1"> or</p>
           <button className="text-sm font-semibold leading-none text-white bg-indigo-700  rounded hover:bg-indigo-600 py-4 w-full my-2">
             Register
           </button>
         </form>

         <button className="text-sm font-semibold leading-none text-white bg-stone-600  rounded hover:bg-stone-500 py-4 w-full my-2">
           Continue with Google
           <p className="text-base font-medium ml-4 text-gray-700 "></p>
         </button>
       </div>
     );
   };

   export default Login;
   ```

1. Create `error`, `email` and `password` states for the form varibles with the `useState` hook

   ```js
   const Login = () => {

   const [error, setError] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

     return (
       // ...code
     );
   };
   export default Login;
   ```

1. Set the `error` state in the form, for every time that app has a error messagem for this component then will show the feedback to the user

   ```js
    //...code
     return (
       <div className="my-4 bg-white rounded p-5">
         <p className="text-xl font-bold text-gray-800 my-1">
           Login to your account
         </p>
         {/* if has a error show the message */}
         {error && (
           <p className="text-md font-bold rounded bg-gray-100 text-center text-red-800 my-1">
             {error}
           </p>
         )}
         <!-- ...code -->
       </div>
     );

   ```

1. Add functions to trigger `onChange` events in each input of the component

   ```js
     return (
      //...code
       <form>
         <input
           type="email"
           placeholder="email"
           className="bg-white border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
           onChange={(e) => setEmail(e.target.value)}
         />
         <input
           type="password"
           placeholder="password"
           className="bg-white border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
           onChange={(e) => setPassword(e.target.value)}
         />
         <!-- ...code -->
       </form>
     );

   ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Header component

For the Header component we will create structure that will show the current user and a logout button. Follow the steps:

1. Create a new file in the `components` folder with the name `Header.js`
1. Write a basic react component structure, should be a function that return a html code
1. Add one `h3` and `button` tags inside of `div` in the return, the first `div` will wrap all tags and the second will wrap just the button
1. Should look like this:

   ```js
   function Header() {
     return (
       <div className="flex flex-row border border-gray-200/80 bg-gray-100 rounded-lg p-6 my-4">
         <h3 className="text-xl font-semibold text-gray-800">
           Hello, currentUser
         </h3>

         <div className="w-100 flex flex-grow flex-col items-end justify-start">
           <button className="rounded bg-red-500  py-1 px-5 text-xs text-white transition-all duration-150 ease-in-out hover:bg-red-600">
             Logout
           </button>
         </div>
       </div>
     );
   }
   export default Header;
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Pokemon component

For the Pokemon component we will create a form that will submit pokemons and a table that will show every user's pokemon. Follow the steps:

1. Create a new file in the `components` folder with the name `Pokemon.js`
1. Write a basic react component structure, should be a function that return a html code
1. Add html form that contains `name`, `number`, `level` inputs and a submit `button` inside the `return`
1. Should look like this:

   ```js
   function Pokemon() {
     return (
       <>
         <div className="formPokemon">
           <div className="addPokemon my-4 bg-white rounded p-5">
             <input
               type="text"
               placeholder="Pokemon name (required)"
               className="bg-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
               required
             />
             <input
               type="text"
               placeholder="Pokemon index number (required)"
               className="bg-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
               required
             />

             <input
               type="number"
               placeholder="Pokemon level (required)"
               className="bg-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 my-2"
               required
             />

             <button className="text-sm font-semibold leading-none text-white bg-indigo-700  rounded hover:bg-indigo-600 py-4 w-full my-2">
               + Add New Pokemon
             </button>
           </div>
         </div>
       </>
     );
   }
   export default Pokemon;
   ```

1. Create `name`, `number`, `level`, `message`, `isEditing` states for the form varibles with the `useState` hook

   ```js
   const Pokemon = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [level, setLevel] = useState(1);

    const [message, setMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);

     return (
       // ...code
     );
   };
   export default Pokemon;
   ```

1. Set the massage state above the form, for every time that app has a messagem for this component then will show the feedback to the user

   ```js
   const Pokemon = () => {
     //...code
     return (
       <>
         <div className="formPokemon">
           <div className="addPokemon my-4 bg-white rounded p-5">
             {message && (
               <p className="bg-gray-100 rounded-lg text-md font-bold  text-center text-indigo-700 py-3 px-5 mb-4 mb-3">
                 {message}
               </p>
             )}
             <!-- ...code -->
           </div>
         </div>
       </>
     );
   };
   export default Pokemon;
   ```

1. Add functions to trigger `onChange` events in each input of the component
1. Add a ternary condition to the submit button text
1. Install the `react-select` component
1. create dummy data for the options of the `Select`
1. Add the `Select` in the form
1. Create a table with the headings `No.`, `Pokemon`, `Level`, `Type` , `Action`

<p align="right">(<a href="#top">back to top</a>)</p>

## Starting Redux

<p align="right">(<a href="#top">back to top</a>)</p>

## Firebase Actions

### Using the Database in a React component

In the `src/App.js` import the **db** from your file config and **collection, getDocs** from `'firebase/firestore'` to be able to manage the documents from the database. You also need to create a const to store your collection reference using the function `collection(db, <collection name>)`

```js
// others imports
import {db} from './firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function App() {
//set the references endpoint to the database
const usersCollectionRef = collection(db, 'users');
return (...);
}

export default App;
```

To be able to manege a componet state in react you need to import **useState**, and to handle side effects in your component you will need import **useEffect** both from `'react'`.

To initialize useState you can `const [<property>, set<Property>] = useState("");` For the useEffect you can declare `useEffect(<function>, <dependency>)` the second argument is optional.

```js
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
```

<div id='database-create'/>

#### Create Collection/documents

<div id='database-read'/>

#### Read Collection/documents

For reading documents from the database you should make use of **useEffect** to fetch data from a collection, and to handle the state of a proprety use **useState**.

To Fetch data from the data base you need to create a new function that will handle this call to firestore using `getDocs(<collection name reference>)`;

```js
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
```

Now for display the data you just need to use the proprety with the `{}` inside of `return`

```js
return (
  <div>
    {/* write the data in screen */}
    {users.map((user) => {
      return (
        <div>
          <li>
            name: {user.name} - pokemon: {user.pokemon}
          </li>
        </div>
      );
    })}
  </div>
);
```

<div id='database-update'/>

#### Update Collection/documents

<div id='database-delete'/>

#### Delete Collection/documents

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#top">back to top</a>)</p>
