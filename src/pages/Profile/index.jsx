import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ActivityChart from '../../components/ActivityChart';
import HorizontalNavbar from '../../components/HorizontalNavbar';
import SessionsLineChart from '../../components/SessionsLineChart';
import PerformanceRadarChart from '../../components/PerformanceRadarChart';
import VerticalNavbar from '../../components/VerticalNavbar';
import TodayObjectiveChart from '../../components/TodayObjectiveChart';
import InfoCard from '../../components/InfoCard';
import GetUserFirstName from '../../services/GetUserFirstName';
import GetUserDailyActivities from '../../services/GetUserDailyActivities';
import GetUserSessionsDuration from '../../services/GetUserSessionsDuration';
import GetUserPerformanceStats from '../../services/GetUserPerformanceStats';
import GetUserTodayScore from '../../services/GetUserTodayScore';
import GetUserDataKeys from '../../services/GetUserDataKeys';
import { dataSRC } from '../../utils/config';
import Loader from '../../utils/Loader';
import './Profile.css';

/**
 * Shows where the data comes from in the console.
 */
const displayDataSource = (src) => {
  if (src === 'API') {
    //console.log('data from API');
  } else {
    //console.log('data from mocked data');
  }
};

/**
 * Component that return the profile page
 *
 * @component
 * @returns {JSX} The profile page
 */
const Profile = () => {
  const { profileId } = useParams();
  const navigate = useNavigate();
  const firstName = GetUserFirstName(profileId);
  const dailyActivities = GetUserDailyActivities(profileId);
  const sessionsDuration = GetUserSessionsDuration(profileId);
  const performanceStats = GetUserPerformanceStats(profileId);
  const todayScore = GetUserTodayScore(profileId);
  const dataKeys = GetUserDataKeys(profileId);

  /**
   * Controls data and redirects to the right error page
   */
  const controleError = () => {
    if (
      firstName === 404 &&
      dailyActivities === 404 &&
      sessionsDuration === 404 &&
      performanceStats === 404 &&
      todayScore === 404 &&
      dataKeys === 404
    )
      navigate('/error404');
    if (
      firstName === 500 &&
      dailyActivities === 500 &&
      sessionsDuration === 500 &&
      performanceStats === 500 &&
      todayScore === 500 &&
      dataKeys === 500
    )
      navigate('/error500');
  };

  useEffect(() => {
    displayDataSource(dataSRC);
    if (dataSRC === 'mocked-data') controleError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (dataSRC === 'API') controleError();

  return (
    <>
      <VerticalNavbar />
      <HorizontalNavbar />
      {firstName &&
      dailyActivities &&
      sessionsDuration &&
      performanceStats &&
      todayScore &&
      dataKeys ? (
        <main className="profile-main">
          <h1 className="profile-title">
            <span>Bonjour </span>
            <span className="profile-name">{firstName}</span>
          </h1>
          <p className="congratulations-text">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
          <div className="charts-cards-container">
            <div className="all-charts-container">
              <div className="activity-chart">
                <ActivityChart data={dailyActivities} />
              </div>
              <div className="triple-charts">
                <div className="sessions-chart">
                  <SessionsLineChart data={sessionsDuration} />
                </div>
                <div className="performance-chart">
                  <PerformanceRadarChart data={performanceStats} />
                </div>
                <div className="today-objective-chart">
                  <TodayObjectiveChart score={todayScore} />
                </div>
              </div>
            </div>
            <div className="cards-container">
              {dataKeys &&
                Object.keys(dataKeys).map((key, index) => (
                  <InfoCard
                    key={`${key}-${index}`}
                    type={key.split('Count')[0]}
                    value={Object.values(dataKeys)[index]}
                  />
                ))}
            </div>
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Profile;
