import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { signIn } from "../../../redux/thunks/userThunks/signInThunk";





const AuthorizationForm = () => {
    const [signInInput, setSignInInput ] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const signInInputHandler = (e) => {
        e.preventDefault();
        setSignInInput((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
        }))
      }

      const signInHandler = () => {
        dispatch(signIn(signInInput, navigate))
        }

    return ( 
    <>
    <div>
    <input type="email" placeholder='email' name='email' onChange={signInInputHandler} />
    <input type="text" placeholder='password' name='password'  onChange={signInInputHandler}/>
    </div>
    
    <button onClick={signInHandler}> Click</button>
    </> );
}
 
export default AuthorizationForm;