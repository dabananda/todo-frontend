import axios from 'axios';

const AUTH_REST_API_BASE_URL = 'http://localhost:8080/api/auth';

export const registerUser = (user) => axios.post(AUTH_REST_API_BASE_URL + '/register', user);
export const loginUser = (usernameOrEmail, password) =>
  axios.post(AUTH_REST_API_BASE_URL + '/login', { usernameOrEmail, password });

export const setToken = (token) => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');

export const saveLoggedInUser = (username) => sessionStorage.setItem('authenticatedUser', username);

export const isUserLoggedIn = () => {
  const user = sessionStorage.getItem('authenticatedUser');
  if (user) return true;
  return false;
};

export const getLoggedInUser = () => sessionStorage.getItem('authenticatedUser');

export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};
