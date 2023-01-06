import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useNavigate } from "react-router-dom"

function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
   signInWithPopup(auth, provider).then((result) => {
    localStorage.setItem("isAuth", true);
    setIsAuth(true);
    navigate("/")
   });
  };

  return (
    <div className='text-5xl flex justify-center m-24'>
   
      <br />
      <button onClick={loginInWithGoogle} className='hover:text-blue-400 px-10 py-4  font-semibold  text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto'>Googleでログイン</button>
    </div>
  )
}

export default Login
