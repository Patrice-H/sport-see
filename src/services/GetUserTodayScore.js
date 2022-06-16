import { USER_MAIN_DATA } from '../mock/data';
import { useFetch } from '../utils/hooks';
import { dataSRC, URL_API } from '../utils/config';

const GetUserTodayScore = (userId) => {
  let userTodayScore;
  const { data } = useFetch(`${URL_API}/user/${userId}`);
  if (dataSRC === 'API') {
    if (data !== undefined && data.data.todayScore !== undefined)
      userTodayScore = data.data.todayScore;
    if (data !== undefined && data.data.score !== undefined)
      userTodayScore = data.data.score;
  } else {
    const userData = USER_MAIN_DATA.filter(
      (user) => user.id === parseInt(userId)
    );
    if (userData[0].todayScore !== undefined)
      userTodayScore = userData[0].todayScore;
    if (userData[0].score !== undefined) userTodayScore = userData[0].score;
  }

  return userTodayScore;
};

export default GetUserTodayScore;
