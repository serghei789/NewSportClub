import { sign } from "../../actions/user/userRegisterAction";

export const signIn = (signInInput, navigate) => async (dispatch) =>{


    const response = await fetch ('http://sportik.herokuapp.com/user/authentification', {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify(signInInput)
    })

if(response.status === 200){
    const {id, name} = await response.json()
    dispatch(sign({id, name}))
    navigate('/')
}else if (response.status === 233){
    alert('it is wrong password')
}else if (response.status === 234){

    alert('go to registration page please')
    // navigate('/registr')
    
}

}
