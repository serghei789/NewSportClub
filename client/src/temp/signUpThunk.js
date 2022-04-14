import { sign } from "../../actions/user/userRegisterAction";


export const getUser = (input) => async(dispatch) => {
const {name, email, password} = input;
const response = await fetch('http://sportik.herokuapp.com/user/registration',{
    method: 'POST',
    credentials:'include',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
    
})
const user = await response.json();
if(response.status === 234){
    alert('this user exist')
}else if (response.status === 200) {
    const { id, name } = await response.json();
    const user = {};
    user.id = id;
    user.name = name;
    window.location.replace('/');
  };
dispatch(sign(user))
}
