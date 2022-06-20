import { USER_MAIN_DATA } from '../mock/data';
import { useFetch } from '../utils/hooks';
import { dataSRC, URL_API } from '../utils/config';

/**
 * It returns the first name of a user
 *
 * @param {string} userId - the user id
 * @returns {string} The firstName
 */
const GetUserFirstName = (userId) => {
  let firstName;
  const { data } = useFetch(`${URL_API}/user/${userId}`);
  if (dataSRC === 'API') {
    if (data !== undefined) firstName = data.data.userInfos.firstName;
  } else {
    const userData = USER_MAIN_DATA.filter(
      (user) => user.id === parseInt(userId)
    );
    if (userData.length > 0) firstName = userData[0].userInfos.firstName;
  }

  return firstName;
};

export default GetUserFirstName;
