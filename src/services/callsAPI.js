import axios from 'axios';

export const getUserInformations = (userId) => {
  return axios
    .get(`http://localhost:3000/user/${userId}`)
    .catch((error) => console.log(error));
};

export const getUserActivity = (userId) => {
  return axios
    .get(`http://localhost:3000/user/${userId}/activity`)
    .catch((error) => console.log(error));
};

export const getUserSessions = (userId) => {
  return axios
    .get(`http://localhost:3000/user/${userId}/average-sessions`)
    .catch((error) => console.log(error));
};
