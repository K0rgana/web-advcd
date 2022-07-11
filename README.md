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
        <li><a href="#reading-documents">Reading documents</a></li>
        <li><a href="#updating-documents">Updating documents</a></li>
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

Pokehub is app for register pokemons. The proposal of this project is to study the tecnology of React and Firebase as Development Stack and analyze their advanges and limitations.

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

- [Node.js](https://nodejs.org/) - **v.14.18.0** or above
- [Npm](https://www.npmjs.com/) - **v.6.14.15** or above

Also it is important to mention that these commands were run from Windows OS, so some of them may be a bit different depending on your OS.

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

Now the following tutorial will guide you how to build a similar application to that you just saw.

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
1. Login with a google account and access the console <https://console.firebase.google.com>
1. Create a project

   <img src="/img/firebase01.png" alt="create a project" title="create a project" height="190"/>

   <img src="/img/firebase02.png" alt="insert a name and continue" title="insert a name and continue" height="190"/>

   <img src="/img/firebase03.png" alt="disable google analytics and create project" title="disable google analytics and create project" height="190"/>

   <img src="/img/firebase04.png" alt="await the criation and continue" title="await the criation and continue" height="190"/>

1. Create a web app

   <img src="/img/firebase05.png" alt="select web app" title="select web app" height="190"/>

   <img src="/img/firebase06.png" alt="give a name and register" title="give a name and register" height="190"/>

- Now save these information and follow the next steps:

  <img src="/img/firebase07.png" alt="save these information" title="save these information" height="190"/>

1. Install the Firebase
   ```bash
   npm install firebase
   ```
1. Copy the Firebase output (configs and SDKs imports) **(code part highlighted in the last print)** and paste in the React project. The recommendation is to create a separate file to keep the access keys in a safe place (try using environment variables). For this project, inside the `src` folder, create a new folder `util` and inside it create a new file `firebaseConfig.js`

1. Go back to Firebase console and create a database in the Firestore Database, you can choose between the **production** or **test** environments. For the location of the Cloud Firestore, just go for the default one but you can change it if you want.

   <img src="/img/firebase08.png" alt="create a database" title="create a database" height="190"/>

   <img src="/img/firebase09.png" alt="chose a environment" title="chose a environment" height="190"/>

   <img src="/img/firebase10.png" alt="chose a location and enable" title="chose a location and enable" height="190"/>

1. If you chose the **production environment**, you need to access the Cloud Firestore rules, in the upper tabs. Now update the database rules to allow reading and writing the database (`allow read, write: if true;` - ATTENTION - this is just for the sake of this test project, do not use this rules in a real production environment). You just need to keep like this while you are learning, you can (and should) change back when deploying or when you are setting up are real application.
1. If you chose the **test environment** just keep in mind that this environment will eventually expire and it will need to be refreshed.
1. Go back to where you pasted the SDKs in the React project, in this case the file `/src/util/firebaseConfig.js`, and add the imports to Firestore. It should look something like this:

   ```js
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";

   const firebaseConfig = {...}

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   ```

> Now you can access the Firebase anywhere in the project, by importing 'db'

- If you created a separated file in the steps before you can import the file doing something like this:

  ```js
  import { db } from '../../util/firebaseConfig';
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Starting Tailwind

For style the app we will use the framework Tailwind CSS. To start using it you can make a full installation or just import the CDN link in this file `/public/index.html` inside the HTML tag `head`. Like this:

```html
<html lang="en">
  <head>
    <script src="https://cdn.tailwindcss.com"></script>

    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
</html>
```

> Now you can style any HTML tag in the project, by adding a className propriety

- You can style the HTML tags doing something like this:

  ```html
  <button
    className="rounded bg-red-500 py-1 px-5 text-xs text-white transition-all duration-150 ease-in-out hover:bg-red-600"
  >
    btn
  </button>
  ```

  <p align="right">(<a href="#top">back to top</a>)</p>

## Creating React components

Now we will create some React components. Inside the `src` folder, create a new folder named `components`; in such folder we will create the components `Login`, `Header` and `Pokemon`.

Before to start to create the components, here are a few React concepts that you should know:

- Component: A component is a piece of code that when exported can be reused in other parts of the code
- Basic structure of a Component: The structure is similar to a function that will return a HTML code. It looks like this:

  ```js
  function Component () {
    return (
      // HTML code
    );
  };
  export default Component;
  ```

- React hooks: Hooks are **component functions** that allow us to have access to state and other React features. We will use just 2 hooks in this project, they are:

  - `useState` Hook: Allows us to track state in a function component. This states can be passed to other (children) components as a `prop`. The hook accepts an initial state and returns two values:

    - The current state.
    - A function that updates the state.

  - `useEffect` Hook: Allows you to perform side effects as fetch data, trigger DOM Events, and set timers in your components. The hook has one mandatory argument, a function.

  See an example of how to use them, this will set a state variable `count` and update its value every second:

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

    // the React component that renders a HTML tag @count.
    return (
      <>
        <h1>I've rendered {count} times!</h1>;
      </>
    );
    export default Component;
  }
  ```

  > Now you're already know everything to start to creating app components!

<p align="right">(<a href="#top">back to top</a>)</p>

### Login component

For the Login component we will create a form that will login and register the user in the Firebase. Follow the steps:

1. Create a new file in the `components` folder with the name `Login.js`
1. Write a basic React component structure, should be a function that return a HTML code
1. Add HTML form that contains `email` and `password` inputs and two `buttons` one for `login` and another one for `register`, you also can add a `button` for `continue with google` inside the `return`
1. Should look like this:

   ```js
   // imports ...

   const Login = () => {
     // Hooks ...

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
       </div>
     );
   };

   export default Login;
   ```

1. Create `error`, `email` and `password` states for the form variables with the `useState` hook

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

1. Set the `error` state in the form, for every time that app has an error message for this component then will show the feedback to the user

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
1. Write a basic React component structure, should be a function that return a HTML code
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

For the Pokemon component we will create a form that will submit an new Pokemon and a table that will show every user's Pokemon. Follow the steps:

1. Create a new file in the `components` folder with the name `Pokemon.js`
1. Write a basic React component structure, should be a function that return a HTML code
1. Add HTML form that contains `name`, `number`, `level` inputs and a submit `button` inside the `return`
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

1. Create `name`, `number`, `level`, `message`, `isEditing` states for the form variables with the `useState` hook

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

1. Set the message state above the form, for every time that app has a message for this component then will show the feedback to the user

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
1. Create dummy data in a `const` for the options of the `Select`

   ```js
   function Pokemon() {
   //select Pokemon types list
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

1. Inside of each `button` that we just created, add a function that will set each input with the Pokemon data when editing, the trigger will be a `onClick` event. For the delete button we will just dispatch a alert of confirmation for now:

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
    `Provider` from `react-redux`. Then create a const `store` that will contain a root reducer. You also have to wrap the component `App` with the `Provider`. Like this:

    ```js

    //To config Redux:
    //import the provider from React Redux and wrap around the main app component
    //When using Redux Toolkit, can configureStore as a prop in the provider component

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
        value: [],
      },

      // ACTIONS
      reducers: {},

      // THUNK ACTIONS
      extraReducers: {},
    });

    // export reducers as actions
    export const {} = trainerSlice.actions;

    export default trainerSlice.reducer;
    ```

    ```js
    ///src/store/reduces/PokemonReduce.js

    import { createSlice } from '@reduxjs/toolkit';

    export const pokemonSlice = createSlice({
      // STATE
      name: 'pokemon',
      initialState: {
        value: [],
      },

      // ACTIONS
      reducers: {},

      // THUNK ACTIONS
      extraReducers: {},
    });

    // export reducers as actions
    export const {} = pokemonSlice.actions;

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

Before we start to interact with Firebase, here are some tips on how to make some actions like adding, updating, deleting or reading data from the database. The Firebase is a non relational database, witch the structure is formed by **Collection** and **Documents**, you can think them as standard structure of folders and documents.

A **Collection** can contain multiples documents. And a **Document** can contain data and **Sub Collection**. To start make any actions in the database you need to import in the file the **db** from your file config, in this case from `/src/util/firebaseConfig.js`

### Adding a document

For create a new document in a collection exists two ways of doing, the first one using **AddDoc** where Firebase will automatically generate the id of the document for you, another way is using **setDoc** where you can explicitly specify the document id with **doc** method.

For both ways you need to import **collection** and a method **addDoc** or **setDoc**, when use setDoc also import **doc**, from `'firebase/firestore'` to be able to manage a collection and add a document in the database. If the collection doesn't exist the Firebase will create it automatically.

When making multiples actions in a file is commum to create a `const` to store the collection reference, to make it a reference to a collection you can pass two parameters like this `collection(db, <collection name>)`.

Here is a example:

```js
// others imports
import { db } from './firebase/firebaseConfig';
import { collection, addDoc, setDoc } from 'firebase/firestore';

// data for the document to be inserted in the database
const data = {
  name: 'Ash Ketchum',
  country: 'Japan',
};
// reference to collection 'users'
const usersRef = collection(db, 'users');

// add a new document with a generated id.
const docRef = await addDoc(usersRef, data);
console.log('Document written with generated ID: ', docRef.id);

// Add a new document in collection 'users' with the id as 'MistyWilliams'
const docMisty = await setDoc(doc(db, 'users', 'MistyWilliams'), {
  name: 'Misty Williams',
  country: 'Japan',
});
console.log('Document written with specified ID: ', docMisty.id);
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Reading documents

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

### Updating documents

For update a document in a collection, you need to import **collection** and the methods **doc** and **updateDoc** from `'firebase/firestore'` to be able to manage a collection and get a document and updating the data on the database.

Here is a example:

```js
// others imports
import { db } from './firebase/firebaseConfig';
import { collection, doc, updateDoc } from 'firebase/firestore';

// data for the document to be inserted in the database
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

Here is a example:

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

1. Go to the file `TrainerReduce.js` inside of the `/src/store/reduces/TrainerReduce.js`.
1. Now we will make some imports. From `@reduxjs/toolkit` import `createAsyncThunk`. From `firebase/firestore` import `collection`,`doc` and `setDoc`. From the `firebaseConfig.js` file import `db`:

   ```js
   import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

   import { db } from '../../util/firebaseConfig';
   import { collection, doc, setDoc } from 'firebase/firestore';

   export const trainerSlice = createSlice({
     // STATE
     // ACTIONS
     // THUNK ACTIONS
   });
   ```

1. Now in the **initialState** create a new state named `currentUser` that will always look for the user's data in the **localStorage** of the browser, if the data doesn't exist we will initialize with a empty array.

   ```js
   const initialStateValue = [];

   export const trainerSlice = createSlice({
     // STATE
     name: 'trainer',
     initialState: {
       value: initialStateValue,
       currentUser: JSON.parse(localStorage.getItem('user')) || [],
     },

     // ACTIONS
   });
   ```

1. In the **reducers** we will create it new actions that will interact with the database and update the current state of `values` in the **initialState**. Now create a new action named `addTrainer` that will create a new document with a explicitly id that store the user's data in the database.

   ```js
    //set the references endpoint to the database
    const collectionRef = collection(db, 'users');

   export const trainerSlice = createSlice({
     // STATE
     // ACTIONS
     reducers: {
       addTrainer: (state, action) => {
         /* Setting the document in the collection with the id of the user. */
         setDoc(doc(collectionRef, action.payload.uid), action.payload);
         /* add user data to the 'value' state in the 'initialState' */
         state.value.push(action.payload);
       },
   });
   ```

1. Still in the **reducers**, create two new actions named `loginTrainer` and `logoutTrainer` that will update the current state `currentUser` in the **initialState**. Looks like this:

   ```js
   export const trainerSlice = createSlice({
    // STATE
    // ACTIONS
    reducers: {
      addTrainer: (state, action) => {
        //...code
      },
      loginTrainer: (state, action) => {
        state.currentUser = action.payload;
      },
      logoutTrainer: (state, action) => {
        state.currentUser = () => {
          localStorage.clear();
        };
   });
   ```

1. Export this actions that were created, so we can use it on app. Should look like this:

   ```js
   export const trainerSlice = createSlice({
     // ...code
   });
   // export reducers as actions
   export const { addTrainer, loginTrainer, logoutTrainer } =
     trainerSlice.actions;

   export default trainerSlice.reducer;
   ```

1. Go to the file `PokemonReduce.js` inside of the `/src/store/reduces/PokemonReduce.js`.
1. Now we will make some imports. From `@reduxjs/toolkit` import `createAsyncThunk`. From `firebase/firestore` import `collection`,`getDocs`, `addDoc`,`doc`,`deleteDoc`,`updateDoc` and `setDoc`. From the `firebaseConfig.js` file import `db`:

   ```js
   import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

   import { db } from '../../util/firebaseConfig';
   import {
     collection,
     getDocs,
     addDoc,
     doc,
     deleteDoc,
     updateDoc,
     setDoc,
   } from 'firebase/firestore';

   export const pokemonSlice = createSlice({
     // STATE
     // ACTIONS
     // THUNK ACTIONS
   });
   ```

1. Now in the **initialState** create a new state named `value` and `status` that will store Pokemons list, if the Pokemon list doesn't exist wet we will initialize with a empty array.

   ```js
   const initialStateValue = [];

   export const pokemonSlice = createSlice({
     // STATE
     name: 'pokemon',
     initialState: {
       value: initialStateValue,
       status: null,
     },

     // ACTIONS
   });
   ```

1. In the **reducers** we will create it new actions that will interact with the database and update the current state of `value` in the **initialState**. Now create new actions to create, update and delete Pokemons from a document that will be store in the database.

   ```js
    //set the references endpoint to the database
    const collectionRef = collection(db, 'pokemons');

   export const pokemonSlice = createSlice({
     // STATE
     // ACTIONS
     reducers: {
       addPokemon: (state, action) => {
        /* Add a new Pokemon to the database and to the 'state' in the 'initialState'. */
        addDoc(collectionRef, action.payload);
        state.value.push(action.payload);
      },
      updatePokemon: (state, action) => {
        /* Set reference to the document in the database. */
        const pokemonRef = doc(db, 'pokemons', action.payload.id);

        /* Update the document in the database. */
        updateDoc(pokemonRef, action.payload);

        /* Update the 'state' in the 'initialState' with the new values. */
        state.value.map((pokemon) => {
          if (pokemon.id === action.payload.id) {
            pokemon.name = action.payload.name;
            pokemon.level = action.payload.level;
            pokemon.types = action.payload.types;
            pokemon.sprites = action.payload.sprites;
          }
        });
      },
      deletePokemon: (state, action) => {
        /* Set reference to the document in the database. */
        const pokemonRef = doc(db, 'pokemons', action.payload.id);
        /* Delete the Pokemon from the database and from the 'state' in the 'initialState' */
        deleteDoc(pokemonRef);
        state.value = state.value.filter(
          (pokemon) => pokemon.id !== action.payload.id
        );
    }
   });
   ```

1. Export this actions that were created, so we can use it on app. should looks like this:

   ```js
   export const pokemonSlice = createSlice({
     // ...code
   });
   // export reducers as actions
   export const { addPokemon, updatePokemon, deletePokemon } =
     pokemonSlice.actions;

   export default pokemonSlice.reducer;
   ```

1. Now create a `createAsyncThunk` the will fetch the data from the Firebase database and handle the async request lifecycles. To lean more about this function of the Redux Toolkit [check the documentation here](https://redux-toolkit.js.org/api/createAsyncThunk). Looks like this:

   ```js
   const collectionRef = collection(db, 'pokemons');

   export const getPokemonDB = createAsyncThunk(
     'pokemon/getPokemonDB',
     async (_, thunkAPI, dispatch, getState) => {
       try {
         /* Get the data from the database and return it*/
         const data = await getDocs(collectionRef);

         const initialValue = data.docs.map((doc) => ({
           ...doc.data(),
           id: doc.id,
         }));
         return initialValue;
       } catch (error) {
         /* Return the error message to the component*/
         return thunkAPI.rejectWithValue({ error: error.message });
       }
     }
   );

   export const pokemonSlice = createSlice({
     //...code
   });
   ```

1. Create **extraReducers** to handle the AsyncThunk states, when the call is a success the value state will be updated:

   ```js
   const collectionRef = collection(db, 'pokemons');

   export const getPokemonDB = createAsyncThunk(
      //...code
   );

   export const pokemonSlice = createSlice({
    // ACTIONS
    reducers: {
    },

    // THUNK ACTIONS
    extraReducers: {
      [getPokemonDB.pending]: (state, action) => {
        state.status = 'loading';
      },
      [getPokemonDB.fulfilled]: (state, action) => {
        state.status = 'success';
        state.value = action.payload;
      },
      [getPokemonDB.rejected]: (state, action) => {
        state.status = 'failed';
      },
   });
   ```

1. Access the `App.js` file in the root project. Now we will import the **components** and **reduces** that we created. Also import `useDispatch, useSelector ` from `react-redux` and `useEffect` from `react`. Looks like this:

   ```js
   import React, { useEffect } from 'react';

   import { useDispatch, useSelector } from 'react-redux';
   //Components
   import Login from './components/Login';
   import Header from './components/Header';
   import Pokemon from './components/Pokemon';
   //Reduces
   import { getPokemonDB } from './store/reduces/PokemonReduce';

   function App() {
     //...code
   }
   ```

1. Now we will use `useEffect` to trigger the thunk to get the Pokemons from the database and to get the **currentUser** user's data from the localStorage. Also in the `return` part add the components.

   ```js
   //...imports

   function App() {
     //hook that allows you to dispatch actions to the Redux store
     const dispatch = useDispatch();

     // Getting the current user from the Redux store
     const currentUser = useSelector((state) => state.trainer.currentUser);

     // this hook is called when the component is mounted
     useEffect(() => {
       dispatch(getPokemonDB());
     });

     // Save the current user to local storage
     useEffect(() => {
       localStorage.setItem('user', JSON.stringify(currentUser));
     }, [currentUser]);

     return (
       <div className="App">
         {/* Check if the current user is logged in. If not, it will render the login component. */}
         {!currentUser.uid && <Login />}

         {/* Check if the user is logged in. If the user is logged in, it will render the components. */}
         {currentUser.uid && (
           <>
             <Header />
             <Pokemon />
           </>
         )}
       </div>
     );
   }
   ```

1. Now we will use the Firebase's Authentication service. Enable the feature in the Firebase console like this:

   <img src="/img/firebase11.png" alt="select the auth" title="select the auth" height="190"/>

   <img src="/img/firebase12.png" alt="select the email/password" title="select the email/password" height="190"/>

   <img src="/img/firebase13.png" alt="enable and save" title="enable and save" height="190"/>

   <img src="/img/firebase14.png" alt="now is enable" title="now is enable" height="190"/>

1. Go to `/src/util/firebaseConfig.js` and import `getAuth` from `firebase/auth`. Should look like this:

   ```js
   //...imports
   import { getAuth } from 'firebase/auth';

   const firebaseConfig = {};

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   //export the auth
   export const auth = getAuth();
   ```

1. Access the `Login.js` file inside of the `/src/components/Login.js`. Here we will create functions that will handle the registration and the login using google `auth`. Start making these imports:

   - `auth` from the `firebaseConfig.js`;
   - `createUserWithEmailAndPassword`,`signInWithEmailAndPassword` from `firebase/auth`;
   - `useDispatch` from `react-redux`
   - `addTrainer, loginTrainer` from `../store/reduces/TrainerReduce`

     ```js
     import { auth } from '../util/firebaseConfig';
     import {
       createUserWithEmailAndPassword,
       signInWithEmailAndPassword,
     } from 'firebase/auth';

     import { useState } from 'react';
     import { useDispatch } from 'react-redux';
     import { addTrainer, loginTrainer } from '../store/reduces/TrainerReduce';

     const Login = () => {
       //...code
     };
     ```

1. Create the functions `handleRegister` and `handleLogin` like this:

   ```js
   //imports

   const Login = () => {
     const dispatch = useDispatch();

     //STATE

     const handleLogin = (e) => {
       //prevents the page to reload
       e.preventDefault();

       //sign in with email and password using the auth
       signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           // Signed in
           const user = userCredential.user;
           // trigger the funtion 'loginTrainer' using the current user
           dispatch(loginTrainer(user));
         })
         .catch((error) => {
           //update the error state with a message
           setError('Wrong email or password!');
         });
     };

     const handleRegister = (e) => {
       //prevents the page to reload
       e.preventDefault();
       //create a new user with email and password using the auth
       createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           // Signed in
           const user = userCredential.user;

           // trigger the function 'addTrainer' to the store
           dispatch(
             addTrainer({
               uid: user.uid,
               email: user.email,
             })
           );
           // trigger the funtion 'loginTrainer' using the current user
           dispatch(loginTrainer(user));
         })
         .catch((error) => {
           //update the error state with a message
           setError('Invalid Email or already registred');
         });
     };

     return (
      //...code
     )
   };
   ```

1. Add functions to trigger `onClick` and `onSubmit` events in the buttons of the component, like this:

   ```js
   const Login = () => {
     //...code
     <form onSubmit={handleLogin}>
       //INPUTS
       <button
         className="text-sm font-semibold leading-none text-white bg-indigo-700  rounded hover:bg-indigo-600 py-4 w-full my-2"
         type="submit"
       >
         Login
       </button>
       <p className="text-xl text-center text-gray-600 my-1"> or</p>
       <button
         className="text-sm font-semibold leading-none text-white bg-indigo-700  rounded hover:bg-indigo-600 py-4 w-full my-2"
         onClick={handleRegister}
       >
         Register
       </button>
     </form>;
   };
   ```

1. Now we will show the current user in the Header component. Go to `/src/components/Header.js` and import:

   - `auth` from the `firebaseConfig.js`;
   - `signOut` from `firebase/auth`;
   - `useDispatch`, `useSelector` from `react-redux`
   - `logoutTrainer` from `../store/reduces/TrainerReduce`

   ```js
   import { auth } from '../util/firebaseConfig';
   import { signOut } from 'firebase/auth';

   import { useDispatch, useSelector } from 'react-redux';
   import { logoutTrainer } from '../store/reduces/TrainerReduce';

   const Header = () => {
     //...code
   };
   ```

1. Use `useSelector` to display the current user data and in the button **logout**, dispatch a function to trigger the `logoutTrainer`. Should look like this:

   ```js
   //imports
   function Header() {
     const currentUser = useSelector((state) => state.trainer.currentUser);
     const dispatch = useDispatch();

     return (
       <div className="flex flex-row border border-gray-200/80 bg-gray-100 rounded-lg p-6 my-4">
         <h3 className="text-xl font-semibold text-gray-800">
           //show the user email Hello, {currentUser.email}
         </h3>

         <div className="w-100 flex flex-grow flex-col items-end justify-start">
           <button
             className="rounded bg-red-500  py-1 px-5 text-xs text-white transition-all duration-150 ease-in-out hover:bg-red-600"
             // Sign out the user and then dispatch the logoutTrainer action.
             onClick={() => {
               signOut(auth)
                 .then(() => {
                   dispatch(logoutTrainer());
                 })
                 .catch((error) => {
                   console.log(error);
                 });
             }}
           >
             Logout
           </button>
         </div>
       </div>
     );
   }
   ```

1. Now we will show the current user in the Pokemon component. Go to `/src/components/Pokemon.js` and import:

   - `useDispatch`, `useSelector` from `react-redux`
   - `addPokemon`,`updatePokemon` and
     `deletePokemon` from `../store/reduces/PokemonReduce`

   ```js
   //imports
   import { useDispatch, useSelector } from 'react-redux';
   import {
     addPokemon,
     updatePokemon,
     deletePokemon,
   } from '../store/reduces/PokemonReduce';

   const Pokemon = () => {
     //...code
   };
   ```

1. Use `useSelector` to display the Pokemons in the **tbody** and add dispatch event on the delete button. Should look like this:

   ```js
   //imports
   function Pokemon() {
     //hook that allows dispatch actions to the Redux store
     const dispatch = useDispatch();

     // get Pokemons list and the current user from state
     const pokemonList = useSelector((state) => state.pokemon.value);
     const currentUser = useSelector((state) => state.trainer.currentUser);

     //STATES

     return (
       //FORM

       //TABLE HEAD
       <tbody>
         {pokemonList.map((poke, index) => {
           return (
             <tr key={poke.id}>
               <th className="text-gray-900 bg-white text-sm whitespace-no-wrap">
                 {index + 1}
               </th>
               <td >
                 //styling divs
                     <img  src={poke.sprites} alt="" />
                   </div>
                   //styling div
                       <span className="font-semibold"> #{poke.number}</span>{' '}
                       {poke.name}
                     </p>
                   </div>
                 </div>
               </td>
               <td>
                 //span styling
                   <span className="relative">{poke.level}</span>
                 </span>
               </td>
               <td>
                 {poke.types.map((type) => {
                   return (
                     //Span styling
                     <span key={type.id} className="relative">
                       {type.value}
                     </span>
                   );
                 })}
               </td>
               <td>
                 //Edit button
                 <button
                   onClick={() => {
                     if (
                       window.confirm(
                         `Do you really want to delete #${poke.number} ${poke.name}?`
                       )
                     ) {
                       dispatch(deletePokemon({ id: poke.id }));
                     }
                   }}
                 >
                   Delete
                 </button>
               </td>
             </tr>
           );
         })}
       </tbody>
       //AND TABLE
     );
   }
   ```

1. In the **form** add an function that will dispatch events for creating a new Pokemon and updating. Use `useSelector` to add the current user id when submiting the form. Should look like this:

   ```js
   //imports
   function Pokemon() {
     // useSelectors
     //STATES

     const handleSubmit = () => {
       setMessage('');
       // Check if any require inputs are empty and return a message
       if ((name && number && selectOptions) === '') {
         setMessage('All fields are required!');
         return;
       }

       // Check if is editing a pokemon. If so, it will update the pokemon
       if (isEditing) {
         dispatch(
           updatePokemon({
             id: pokemonId,
             userId: currentUser.uid,
             name: name,
             number: number,
             types: selectOptions,
             level: level,
             sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`,
           })
         );
         setMessage('Pokemon updated successfully!');
       }

       // Add a new Pokemon to the database
       else {
         dispatch(
           addPokemon({
             userId: currentUser.uid,
             name: name,
             number: number,
             types: selectOptions,
             level: level,
             sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`,
           })
         );
         setMessage('New Pokemon added successfully!');
       }
       setPokemonId('');
       setName('');
       setNumber('');
       setLevel(1);
       setSelectOptions('');
       setIsEditing(false);
     };

     return (
       //FORM Inputs

       <button onClick={handleSubmit}>
         {isEditing ? 'Save' : '+ Add New Pokemon'}
       </button>

       //TABLE
     );
   }
   ```

 <p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Morgana Albuquerque - [linkedIn](https://www.linkedin.com/in/korgana) - mfa1@discente.ifpe.edu.br

Project Link: [https://github.com/K0rgana/web-advcd](https://github.com/K0rgana/web-advcd)

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

- This project was developed for Advanced Web Topics class from Systems for Internet course from federal institute of Pernambuco (IFPE)

<p align="right">(<a href="#top">back to top</a>)</p>
