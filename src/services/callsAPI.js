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
