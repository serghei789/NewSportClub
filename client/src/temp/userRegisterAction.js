import { LOGOUT, SIGN } from "../../types/userTypes";


export const sign = (user) => {
  return{
   type: SIGN,
    payload:user,   
  };  
};

export const logout = () => {
    return {
        type: LOGOUT,
    }
}