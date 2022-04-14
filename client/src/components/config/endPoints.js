const { REACT_APP_HOST: host } = process.env;

export const signUp = () => `${host}/user/registration`;
export const signIn = () => `${host}/auth/signin`;
export const signOut = () => `${host}/auth/signout`;
export const checkAuth = () => `${host}/auth/check`;

export const getAllUsers = () => `${host}/user`;
export const editUser = (id) => `${host}/user/${id}`;
export const getUser = (id) => `${host}/user/${id}`;
export const getSports = () => `${host}/sports`;
