import { USER_AVERAGE_SESSIONS } from '../mock/data';
import { useFetch } from '../utils/hooks';
import { dataSRC, URL_API } from '../utils/config';

const GetUserSessionsDuration = (userId) => {
  let sessionDuration;
  const { data } = useFetch(`${URL_API}/user/${userId}/average-sessions`);
  if (dataSRC === 'API') {
    if (data !== undefined) sessionDuration = data.data.sessions;
  } else {
    const userData = USER_AVERAGE_SESSIONS.filter(
      (user) => user.userId === parseInt(userId)
    );
    sessionDuration = userData[0].sessions;
  }

  return sessionDuration;
};

export default GetUserSessionsDuration;
