import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../../redux/thunks/userThunks/signUpThunk";

const RegistrationForm = () => {
    const dispatch = useDispatch()  ;
const [input, setInput] = useState({
  name:'',
  email:'',
  password:'',
})
const inputsHandler = (e) => {
    setInput ((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }));
   }

const newUserHandler = () => {
dispatch(getUser(input))
}

    return ( 
    <>
    <div >
        
<input type="text" placeholder='name' name='name' onChange= {inputsHandler}/>
<input type="email" placeholder='email' name='email' onChange= {inputsHandler}/>
<input type="text" placeholder='password' name='password' onChange= {inputsHandler}/>

<button onClick={newUserHandler}> Click</button>
    </div>
    </> );
}
 
export default RegistrationForm;