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
      <ul>
        <li><a href="#adding-a-document">Adding a document</a></li>
        <li><a href="#reading-a-documents">Reading a documents</a></li>
        <li><a href="#updating-a-documents">Updating a documents</a></li>
        <li><a href="#deleting-a-documents">Deleting a documents</a></li>
      </ul>
      <li><a href="#firebase-actions">Creating Reduces with Redux</a></li>
     </ul>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

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

## Getting Started

The first steps in here are to run the application and you try to recreate on your own.

### Requirements

Before start to follow the tutorial or run this project you need to already have installed:

- [Node.js](https://nodejs.org/)
- [Npm](https://www.npmjs.com/)

### Run the project

1. Clone this repository
   ```bash
   git clone https://github.com/K0rgana/web-advcd.git
   ```
1. Install the packages
   ```bash
   npm install
   ```
1. See running
   ```bash
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

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
   ```bash
   npm install firebase
   ```
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

For style the app we will use the framework css tailwind. To start using you can make a full instalation or just import the CDN link in this file `/public/index.html` inside the html tag `head`. Like this:

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

1. Add functions to trigger `onChange` events in each input of the component and set the default `value` state for the corresponding of each input

   ```js
   const Pokemon = () => {
     //...code
     return (
       <>
         //...code
         <input
           type="text"
           placeholder="Pokemon name (required)"
           className="bg-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
           value={name}
           onChange={(e) => {
             setName(e.target.value);
           }}
           required
         />
         <input
           type="text"
           placeholder="Pokemon index number (required)"
           className="bg-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
           value={number}
           onChange={(e) => {
             setNumber(e.target.value);
           }}
           required
         />
         <input
           type="number"
           placeholder="Pokemon level (required)"
           className="bg-white border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 my-2"
           value={level}
           onChange={(e) => {
             setLevel(e.target.value);
           }}
           required
         />
         //...code
       </>
     );
   };
   export default Pokemon;
   ```

1. Add a ternary condition to the submit button, to change text when editing
   ```js
   <button className="text-sm font-semibold leading-none text-white bg-indigo-700  rounded hover:bg-indigo-600 py-4 w-full my-2">
     {isEditing ? 'Save' : '+ Add New Pokemon'}
   </button>
   ```
1. Install the `react-select` component
   ```bash
      npm install react-select
   ```
1. create dummy data in a const for the options of the `Select`

   ```js
   function Pokemon() {
   //select pokemon types list
   const options = [
     { id: 0, label: 'Fairy', value: 'Fairy' },
     { id: 1, label: 'Normal', value: 'Normal' },
     { id: 2, label: 'Fire', value: 'Fire' },
     { id: 3, label: 'Grass', value: 'Grass' },
     { id: 4, label: 'Electric', value: 'Electric' },
     { id: 5, label: 'Ice', value: 'Ice' },
     { id: 6, label: 'Fighting', value: 'Fighting' },
     { id: 7, label: 'Poison', value: 'Poison' },
     { id: 8, label: 'Ground', value: 'Ground' },
     { id: 9, label: 'Flying', value: 'Flying' },
     { id: 10, label: 'Psychic', value: 'Psychic' },
     { id: 11, label: 'Bug', value: 'Bug' },
     { id: 12, label: 'Rock', value: 'Rock' },
     { id: 13, label: 'Ghost', value: 'Ghost' },
     { id: 14, label: 'Dark', value: 'Dark' },
     { id: 15, label: 'Steel', value: 'Steel' },
     { id: 16, label: 'Dragon', value: 'Dragon' },

   ];
     return ()
     }

   export default Pokemon;
   ```

1. Add the `Select` inside the form and add a function to trigger `onChange` event, like this:

   ```js
   function Pokemon() {
     return (
       //INPUT NUMBER
       <Select
         className="select"
         options={options}
         value={selectOptions}
         isMulti
         isClearable={true}
         isSearchable={true}
         onChange={(item) => {
           setSelectOptions(item);
         }}
       />

       // SUBMIT BTN
     );
   }

   export default Pokemon;
   ```

1. Create a table with the headings `No.`, `Pokemon`, `Level`, `Type` , `Action`

   ```js
   function Pokemon() {
     return (
       //DIV formPokemon
       <div className="displayPokemons">
         <div className="inline-block min-w-full shadow rounded-lg overflow-hidden my-4">
           <table className="min-w-full leading-normal">
             <thead>
               <tr>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                   No.
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                   Pokemon
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                   Level
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                   Type
                 </th>
                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                   Action
                 </th>
               </tr>
             </thead>
             <tbody>
             <!-- TO ADD CODE -->
             </tbody>
           </table>
         </div>
       </div>

       // SUBMIT BTN
     );
   }

   export default Pokemon;
   ```

1. Inside of `tbody` of the table that we just created, add this structure:

   ```js
   <tr>
    <th className="text-gray-900 bg-white text-sm whitespace-no-wrap">
      index
    </th>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-10 h-10">
          <img className="w-full h-full" src={/} alt="" />
        </div>
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">
            <span className="font-semibold"> #number</span>{' '}
            name}
          </p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
        <span className="absolute inset-0 bg-stone-100 opacity-50 rounded-full"></span>
        <span className="relative">level</span>
      </span>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

          <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
            <span className="absolute inset-0 bg-stone-200 opacity-50 rounded-full"></span>

            <span  className="relative">
              types
            </span>
          </span>
        );
      })}
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <button
        className="rounded bg-indigo-500 py-1 px-1 text-xs text-white transition-all duration-150 ease-in-out hover:bg-indigo-600 w-full"

        }}
      >
        Edit
      </button>
      <button
        className="rounded bg-red-500 py-1 px-1 text-xs text-white transition-all duration-150 ease-in-out hover:bg-red-600 w-full"

      >
        Delete
      </button>
    </td>
   </tr>

   ```

1. Inside of each `button` that we just created, add a function that will set each input with the pokemon data when editing, the trigger will be a `onClick` event. for the delete button we will just dispach a alert of confirmation for now:

   ```js
   <tr>
     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
       <button
         className="rounded bg-indigo-500 py-1 px-1 text-xs text-white transition-all duration-150 ease-in-out hover:bg-indigo-600 w-full"
         onClick={() => {
           setIsEditing(true);
           setPokemonId(poke.id);
           setName(poke.name);
           setNumber(poke.number);
           setLevel(poke.level);
           setSelectOptions(poke.types);
         }}
       >
         Edit
       </button>
       <button
         className="rounded bg-red-500 py-1 px-1 text-xs text-white transition-all duration-150 ease-in-out hover:bg-red-600 w-full"
         onClick={() => {
           if (window.confirm(`Do you really want to delete #number name?`)) {
             //Then do something
           }
         }}
       >
         Delete
       </button>
     </td>
   </tr>
   ```

    <p align="right">(<a href="#top">back to top</a>)</p>

## Starting Redux

1.  Install the `redux`, `react-redux` and `@reduxjs/toolkit`
    ```bash
       npm install redux react-redux @reduxjs/toolkit
    ```
1.  Go to the file `/src/index.js`. Import `configureStore` from `@reduxjs/toolkit` and
    `Provider` from `react-redux`. Then create create a const `store` that will contain a root reducer. You also have to wrap the componet `App` with the `Provider. Like this:

    ```js

    //To config redux:
    //import the provider from react redux and wrap around the main app component
    //When using redux toolkit, can configureStore as a prop in the provider componet

        import { configureStore } from '@reduxjs/toolkit';
        import { Provider } from 'react-redux';

        //toolkit -> main reduces root
        const store = configureStore({
          reducer: {

          },
        });

        ReactDOM.render(
          <React.StrictMode>
            <Provider store={store}>
              <App />
            </Provider>
          </React.StrictMode>,
          document.getElementById('root')
        ~~~~
    ```

1.  Create the files `TrainerReduce.js` and `PokemonReduce.js` inside of the `/src/store/reduces`. Then create the basic structure of `Slice`. Like this:

    ```js
    ///src/store/reduces/TrainerReduce.js

    import { createSlice } from '@reduxjs/toolkit';

    export const trainerSlice = createSlice({
      // STATE
      name: 'trainer',
      initialState: {
        value: initialStateValue,
      },

      // ACTIONS
      reducers: {},

      // THUNK ACTIONS
      extraReducers: {},

      // export reducers as actions
      export const { } =  trainerSlice.actions;

      export default trainerSlice.reducer;
    ```

    ```js
    ///src/store/reduces/PokemonReduce.js

    import { createSlice } from '@reduxjs/toolkit';

    export const pokemonSlice = createSlice({
      // STATE
      name: 'pokemon',
      initialState: {
        value: initialStateValue,
      },

      // ACTIONS
      reducers: {},

      // THUNK ACTIONS
      extraReducers: {},

      // export reducers as actions
      export const { } =  pokemonSlice.actions;

      export default pokemonSlice.reducer;
    ```

1.  Go to the file `/src/index.js` and import the reduces inside the root `reduces`, like this:

    ```js
    import { Provider } from 'react-redux';

    import TrainerReduce from './store/reduces/TrainerReduce';
    import PokemonReduce from './store/reduces/PokemonReduce';

    //toolkit -> main reduces root
    const store = configureStore({
      reducer: {
        trainer: TrainerReduce,
        pokemon: PokemonReduce,
      },
    });
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Firebase Actions

Before we start to interact with firebase, here are some tips on how to make some actions like adding, updating, deleting or reading data from the database. The firebase is a non relational database, witch the structure is formed by **Collection** and **Documents**, you can think them as standard structure of folders and documents.

A **Collection** can contain multiples documents. And a **Document** can contain data and **Sub Collection**. To start make any actions in the database you need to import in the file the **db** from your file config, in this case from `/src/util/firebaseConfig.js`

### Adding a document

For create a new document in a collection exists two ways of doing, the first one using **AddDoc** where firebase will automatically generates the id of the document for you, another way is using **setDoc** where you can explicitly specifying the document id with **doc** method.

For both ways you need to import **collection** and a method **addDoc** or **setDoc**, when use setDoc also import **doc**, from `'firebase/firestore'` to be able to manage a collection and add a document in the database. If the collection doesn't exist the firebase will create it automaticaly.

When making multiples actions in a file is commum to create a const to store the collection reference, to make it a reference a collection you can pass two paramenters like this `collection(db, <collection name>)`.

Here is a exemple:

```js
// others imports
import { db } from './firebase/firebaseConfig';
import { collection, addDoc, setDoc } from 'firebase/firestore';

// data for the document to be insert in the database
const data = {
  name: 'Ash Ketchum',
  country: 'Japan',
};
// reference to collection 'users'
const usersRef = collection(db, 'users');

// add a new document with a generated id.
const docRef = await addDoc(usersRef, data);
console.log('Document written with genereted ID: ', docRef.id);

// Add a new document in collection 'users' with the id as 'MistyWilliams'
const docMisty = await setDoc(doc(db, 'users', 'MistyWilliams'), {
  name: 'Misty Williams',
  country: 'Japan',
});
console.log('Document written with specified ID: ', docMisty.id);
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Reading a documents

For reading a single document from the database you need to create a new function that will handle this call to firestore using `getDocs(<collection name reference>)`;

For reading a collection

```js
// others imports
import { db } from './firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

//get the user with the id 'MistyWilliams'
const docRef = doc(db, 'users', 'MistyWilliams');
//get all data from the doc
const docData = await getDoc(docRef);

if (docData.exists()) {
  console.log('Document data:', docData.data());
} else {
  // doc.data() will be undefined in this case
  console.log('No such document!');
}

//get the collection 'users'
const collRef = doc(db, 'users');
//get all docs from collection
const collData = await getDocs(collRef);
const docsColl = collData.docs.map((doc) => ({
  ...doc.collData(),
  id: doc.id,
}));
console.log('Collcection Documents: ', docsColl);
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Updating a documents

For update a document in a collection, you need to import **collection** and the methods **doc** and **updateDoc** from `'firebase/firestore'` to be able to manage a collection and get a document and updating the data on the database.

Here is a exemple:

```js
// others imports
import { db } from './firebase/firebaseConfig';
import { collection, doc, updateDoc } from 'firebase/firestore';

// data for the document to be insert in the database
const newData = {
  name: 'Brock Harrison',
  country: 'Tokyo',
};
// get the user with the id 'MistyWilliams'
const userRef = doc(db, 'users', 'MistyWilliams');
//update the user
const docMisty = await updateDoc(userRef, newData);
console.log('Document updated: ', docMisty);
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Deleting a documents

For delete a document in a collection, you need to import **collection** and the methods **doc** and **deleteDoc** from `'firebase/firestore'` to be able to manage a collection and get a document and delete it from the database.

Here is a exemple:

```js
// others imports
import { db } from './firebase/firebaseConfig';
import { collection, doc, deleteDoc } from 'firebase/firestore';

// get the user with the id 'MistyWilliams'
const userRef = doc(db, 'users', 'MistyWilliams');
//delete the user
deleteDoc(userRef);
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Creating Reduces with Redux

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Morgana Albuquerque - [linkedIn](https://www.linkedin.com/in/korgana) - mfa1@discente.ifpe.edu.br

Project Link: [https://github.com/K0rgana/web-advcd](https://github.com/K0rgana/web-advcd)

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

- This project was developed for IFPE Advanced Web Topics class

<p align="right">(<a href="#top">back to top</a>)</p>
