import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HorizontalNavbar from '../../components/HorizontalNavbar';
import VerticalNavbar from '../../components/VerticalNavbar';
import { getUserInformations } from '../../services/callsAPI';
import './Profile.css';

const Profile = () => {
  const param = useParams();
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    getUserInformations(parseInt(param.profileId)).then((res) => {
      setProfileData(res.data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <VerticalNavbar />
      <HorizontalNavbar />
      <h1 className="profile-title">
        <span>Bonjour </span>
        <span className="profile-name">
          {profileData && profileData.userInfos.firstName}
        </span>
      </h1>
    </>
  );
};

export default Profile;
