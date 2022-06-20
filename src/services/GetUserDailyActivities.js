import { USER_ACTIVITY } from '../mock/data';
import { useFetch } from '../utils/hooks';
import { dataSRC, URL_API } from '../utils/config';

/**
 * It returns an array of objects from an API or a local JSON file,
 * each object representing a day's worth of activity.
 *
 * @param {string} userId - The user's ID
 * @returns {[object]} Daily activities data
 */
const GetUserDailyActivities = (userId) => {
  let dailyActivities;
  const { data } = useFetch(`${URL_API}/user/${userId}/activity`);
  if (dataSRC === 'API') {
    if (data !== undefined) dailyActivities = data.data.sessions;
  } else {
    const userData = USER_ACTIVITY.filter(
      (user) => user.userId === parseInt(userId)
    );
    if (userData.length > 0) dailyActivities = userData[0].sessions;
  }

  return dailyActivities;
};

export default GetUserDailyActivities;
