import React from 'react';
import { auth } from '../util/firebaseConfig';

import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { logoutTrainer } from '../store/reduces/TrainerReduce';

function Header() {
  const currentUser = useSelector((state) => state.trainer.currentUser);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row border border-gray-200/80 bg-gray-100 rounded-lg p-6 my-4">
      <h3 className="text-xl font-semibold text-gray-800">
        Hello, {currentUser.email}
      </h3>

      {/* <!-- Right Actions Container --> */}
      <div className="w-100 flex flex-grow flex-col items-end justify-start">
        <button
          className="rounded bg-red-500  py-1 px-5 text-xs text-white transition-all duration-150 ease-in-out hover:bg-red-600"
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

export default Header;
