import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import ActivityBarChart from '../../components/ActivityBarChart';
import ActivityChart from '../../components/ActivityChart';
//import CustomComponent from '../../components/CustomComponent';
import HorizontalNavbar from '../../components/HorizontalNavbar';
import VerticalNavbar from '../../components/VerticalNavbar';
import { getUserInformations, getUserActivity } from '../../services/callsAPI';
import './Profile.css';

const Profile = () => {
  const param = useParams();
  const [profileData, setProfileData] = useState();
  const [userActivity, setUserActivity] = useState();

  useEffect(() => {
    getUserInformations(parseInt(param.profileId)).then((res) => {
      setProfileData(res.data.data);
    });
    getUserActivity(parseInt(param.profileId)).then((res) => {
      setUserActivity(res.data.data.sessions);
      console.log(res.data.data.sessions);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,

    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,

        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
  }, [dimensions]);

  console.log(dimensions.width + ' x ' + dimensions.height);
  */
  // <ActivityChart data={userActivity.sessions} />
  return (
    <div>
      <VerticalNavbar />
      <HorizontalNavbar />
      <h1 className="profile-title">
        <span>Bonjour </span>
        <span className="profile-name">
          {profileData && profileData.userInfos.firstName}
        </span>
      </h1>
      <div className="activity-chart-container">
        <p className="activity-chart-title">Activité quotidienne</p>
        <ActivityChart data={userActivity} />
      </div>
    </div>
  );
};

export default Profile;
