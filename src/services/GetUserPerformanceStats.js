import { USER_PERFORMANCE } from '../mock/data';
import { useFetch } from '../utils/hooks';
import { dataSRC, URL_API } from '../utils/config';

const GetUserPerformanceStats = (userId) => {
  let performanceStats;
  const { data } = useFetch(`${URL_API}/user/${userId}/performance`);
  if (dataSRC === 'API') {
    if (data !== undefined) performanceStats = data.data.data;
  } else {
    const userData = USER_PERFORMANCE.filter(
      (user) => user.userId === parseInt(userId)
    );
    performanceStats = userData[0].data;
  }

  return performanceStats;
};

export default GetUserPerformanceStats;
