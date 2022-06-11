import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActivityChart from '../../components/ActivityChart';
import HorizontalNavbar from '../../components/HorizontalNavbar';
import SessionsLineChart from '../../components/SessionsLineChart';
import PerformanceRadarChart from '../../components/PerformanceRadarChart';
import VerticalNavbar from '../../components/VerticalNavbar';
import {
  getUserInformations,
  getUserActivity,
  getUserSessions,
  getUserPerformance,
} from '../../services/callsAPI';
import './Profile.css';

const Profile = () => {
  const param = useParams();
  const [profileData, setProfileData] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userSessions, setUserSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();

  useEffect(() => {
    getUserInformations(parseInt(param.profileId)).then((res) => {
      setProfileData(res.data.data);
    });

    getUserActivity(parseInt(param.profileId)).then((res) => {
      setUserActivity(res.data.data.sessions);
    });

    getUserSessions(parseInt(param.profileId)).then((res) => {
      setUserSessions(res.data.data.sessions);
    });

    getUserPerformance(parseInt(param.profileId)).then((res) => {
      setUserPerformance(res.data.data);
      console.log(res.data.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div className="all-charts-container">
        <div className="activity-chart">
          <ActivityChart data={userActivity} />
        </div>
        <div className="triple-charts">
          <div className="sessions-chart">
            <SessionsLineChart data={userSessions} />
          </div>
          <div className="performance-chart">
            {userPerformance && (
              <PerformanceRadarChart
                data={userPerformance.data}
                kind={userPerformance.kind}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
