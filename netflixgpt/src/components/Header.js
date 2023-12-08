import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const user =  useSelector(store => store.userReducer?.payload);
  const dispatch = useDispatch();
  console.log(user)
  // return;
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/");
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        const {uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid:uid, email:email, displayName:displayName, photoURL:photoURL
        }))
        navigate("/browse")
      }else{
        dispatch(removeUser());
        navigate("/")
      }
    })

    return()=>{
      unsubscribe();
    }
  }, [])

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img 
            className="w-36"
            src={LOGO}
            alt="logo"
        />

        { user &&  <div>
          <img 
            className="w-12 h-12"
            alt="userIcon"
            src={user.photoURL ? user.photoURL : ''}
          />
          <button className="font-bold text-white" onClick={handleSignOut}>SignOut</button>
        </div>}
    </div>

  )
}

export default Header