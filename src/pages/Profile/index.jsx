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
import TodayObjectiveChart from '../../components/TodayObjectiveChart';
import InfoCard from '../../components/InfoCard';

const Profile = () => {
  const param = useParams();
  const [profileData, setProfileData] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userSessions, setUserSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();
  const [userTodayScore, setUserTodayScore] = useState();

  useEffect(() => {
    getUserInformations(parseInt(param.profileId)).then((res) => {
      setProfileData(res.data.data);
      if (res.data.data.todayScore !== undefined) {
        setUserTodayScore(res.data.data.todayScore);
      } else {
        setUserTodayScore(res.data.data.score);
      }
    });

    getUserActivity(parseInt(param.profileId)).then((res) => {
      setUserActivity(res.data.data.sessions);
    });

    getUserSessions(parseInt(param.profileId)).then((res) => {
      setUserSessions(res.data.data.sessions);
    });

    getUserPerformance(parseInt(param.profileId)).then((res) => {
      setUserPerformance(res.data.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <VerticalNavbar />
      <HorizontalNavbar />
      <main className="profile-main">
        <h1 className="profile-title">
          <span>Bonjour </span>
          <span className="profile-name">
            {profileData && profileData.userInfos.firstName}
          </span>
        </h1>
        <p className="congratulations-text">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        <div className="charts-cards-container">
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
              <div className="today-objective-chart">
                {userTodayScore && (
                  <TodayObjectiveChart score={userTodayScore} />
                )}
              </div>
            </div>
          </div>
          <div className="cards-container">
            {profileData &&
              Object.keys(profileData.keyData).map((key, index) => (
                <InfoCard
                  key={`${key}-${index}`}
                  type={key.split('Count')[0]}
                  value={Object.values(profileData.keyData)[index]}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
