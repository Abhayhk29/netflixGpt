import {useRef, useState} from 'react'
import Header from "./Header"
import checkVaildData from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { DEFAULT_IMAGE } from '../utils/constant';


const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null)
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    // checkVaildData()
    let validate = checkVaildData(email.current.value,password.current.value)
    setError(validate);
    if(validate) return;
      
    // signin or sign up
    if(!isSignInForm){
      // signup
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: `${name.current.value}`,
            photoURL: DEFAULT_IMAGE
          }).then(() => {
            const {uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({
              uid:uid, email:email, displayName:displayName, photoURL:photoURL
            }))
          }).catch((error) => {
          })
        }).catch((error) => {
          const errorCode = error.code;
          const errMessage = error.message;
          setError(errorCode + "-" + errMessage);
        })
    } else {
      // signin
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errMessage = error.message;
          setError(errorCode + "-" + errMessage);
        })
    }



  }
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
                alt="logo"
            />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
            <input ref={name} type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700" />
            )}
            <input ref={email} type="text" placeholder="EmailAddress" className="p-2 my-2 w-full bg-gray-700" />
            <input ref={password} type="password" placeholder="password" className="p-2 my-2 w-full bg-gray-700" />
            <p className='text-lg text-red-700'>{error}</p>
            <button className="p-2 my-4 bg-red-700 w-full" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignUp}>
            {isSignInForm ? "New To Netflix? Sign Up Now" : "Already registered? SignIn Now"}
            </p>
        </form>
    </div>
  )
}

export default Login