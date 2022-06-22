import { USER_MAIN_DATA } from '../mock/data';
import { useFetch } from '../utils/hooks';
import { dataSRC, URL_API } from '../utils/config';

/**
 * It returns the user's day score from an API or local JSON file
 *
 * @param userId - The user's ID
 * @returns {number} The score of the day.
 */
const GetUserTodayScore = (userId) => {
  let userTodayScore;
  const { data } = useFetch(`${URL_API}/user/${userId}`);
  if (dataSRC === 'API' && data !== undefined) {
    if (data === 404 || data === 500) {
      userTodayScore = data;
    } else {
      if (data.data.todayScore !== undefined) {
        userTodayScore = data.data.todayScore;
      }
      if (data.data.score !== undefined) {
        userTodayScore = data.data.score;
      }
    }
  }
  if (dataSRC === 'mocked-data') {
    const userData = USER_MAIN_DATA.filter(
      (user) => user.id === parseInt(userId)
    );
    if (userData.length > 0 && userData[0].todayScore !== undefined) {
      userTodayScore = userData[0].todayScore;
    }
    if (userData.length > 0 && userData[0].score !== undefined) {
      userTodayScore = userData[0].score;
    }
    if (userData.length === 0) {
      userTodayScore = 404;
    }
  }

  return userTodayScore;
};

export default GetUserTodayScore;
