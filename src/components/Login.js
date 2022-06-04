import { auth, provider } from '../util/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginTrainer } from '../store/reduces/TrainerReduce';

const Login = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(loginTrainer(user));
        // navitage("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(loginTrainer(user));
        // navitage("/");
      })
      .catch((error) => {
        console.log(error);
        setError('Wrong email or password!');
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(loginTrainer(user));
        // navitage("/");
      })
      .catch((error) => {
        console.log(error);
        setError('Invalid Email or already registred');
      });
  };

  return (
    <div className="my-4 bg-white rounded p-5">
      <p className="text-xl font-bold text-gray-800 my-1">
        Login to your account
      </p>
      {/* if has a erro show this message */}
      {error && (
        <p className="text-md font-bold rounded bg-gray-100 text-center text-red-800 my-1">
          {error}
        </p>
      )}
      <form onSubmit={handleLogin}>
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
      </form>

      <button
        className="text-sm font-semibold leading-none text-white bg-stone-600  rounded hover:bg-stone-500 py-4 w-full my-2"
        onClick={handleLoginWithGoogle}
      >
        Continue with Google
        <p className="text-base font-medium ml-4 text-gray-700 "></p>
      </button>
    </div>
  );
};

export default Login;
