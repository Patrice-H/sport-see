import { USER_PERFORMANCE } from '../mock/data';
import { useFetch } from '../utils/hooks';
import { dataSRC, URL_API } from '../utils/config';

/**
 * It returns an array of objects from an API or a local JSON file,
 * each object representing the performance of an activity.
 *
 * @param {string} userId - The user's ID
 * @returns {[object]} The performance stats
 */
const GetUserPerformanceStats = (userId) => {
  let performanceStats;
  const { data } = useFetch(`${URL_API}/user/${userId}/performance`);
  if (dataSRC === 'API') {
    if (data !== undefined) performanceStats = data.data.data;
  } else {
    const userData = USER_PERFORMANCE.filter(
      (user) => user.userId === parseInt(userId)
    );
    if (userData.length > 0) performanceStats = userData[0].data;
  }

  return performanceStats;
};

export default GetUserPerformanceStats;
