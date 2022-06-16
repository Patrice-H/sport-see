import { USER_MAIN_DATA } from '../mock/data';
import { useFetch } from '../utils/hooks';
import { dataSRC, URL_API } from '../utils/config';

const GetUserDataKeys = (userId) => {
  let dataKeys;
  const { data } = useFetch(`${URL_API}/user/${userId}`);
  if (dataSRC === 'API') {
    if (data !== undefined) dataKeys = data.data.keyData;
  } else {
    const userData = USER_MAIN_DATA.filter(
      (user) => user.id === parseInt(userId)
    );
    dataKeys = userData[0].keyData;
  }

  return dataKeys;
};

export default GetUserDataKeys;
