import { USER_ACTIVITY } from '../mock/data';
import { useFetch } from '../utils/hooks';
import { dataSRC, URL_API } from '../utils/config';

const GetUserDailyActivities = (userId) => {
  let dailyActivities;
  const { data } = useFetch(`${URL_API}/user/${userId}/activity`);
  if (dataSRC === 'API') {
    if (data !== undefined) dailyActivities = data.data.sessions;
  } else {
    const userData = USER_ACTIVITY.filter(
      (user) => user.userId === parseInt(userId)
    );
    dailyActivities = userData[0].sessions;
  }

  return dailyActivities;
};

export default GetUserDailyActivities;
