import { USER_AVERAGE_SESSIONS } from '../mock/data';
import { useFetch } from '../utils/hooks';
import { dataSRC, URL_API } from '../utils/config';

/**
 * It returns an array of objects from an API or a local JSON file,
 * each object representing the duration of a session for a day of the week
 *
 * @param {string} userId - The user's ID
 * @returns {[object]} Daily session data.
 */
const GetUserSessionsDuration = (userId) => {
  let sessionDuration;
  const { data } = useFetch(`${URL_API}/user/${userId}/average-sessions`);
  if (dataSRC === 'API' && data !== undefined) {
    if (data === 404 || data === 500) {
      sessionDuration = data;
    } else {
      sessionDuration = data.data.sessions;
    }
  }
  if (dataSRC === 'mocked-data') {
    const userData = USER_AVERAGE_SESSIONS.filter(
      (user) => user.userId === parseInt(userId)
    );
    if (userData.length > 0) {
      sessionDuration = userData[0].sessions;
    } else {
      sessionDuration = 404;
    }
  }

  return sessionDuration;
};

export default GetUserSessionsDuration;
