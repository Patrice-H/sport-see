import axios from 'axios';

export const getUserInformations = (userId) => {
  return (
    axios
      .get(`http://localhost:3000/user/${userId}`)
      /*
    .then((response) => {
      console.log(response.data.data);
      return response.data;
    })*/
      .catch((error) => console.log(error))
  );
};

export const getUserActivity = (userId) => {
  return (
    axios
      .get(`http://localhost:3000/user/${userId}/activity`)
      /*
    .then((response) => {
      console.log(response.data.data.sessions);
      return response.data;
    })*/
      .catch((error) => console.log(error))
  );
};
