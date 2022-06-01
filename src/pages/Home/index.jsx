import { Link } from 'react-router-dom';
import VerticalNavbar from '../../components/VerticalNavbar';
import HorizontalNavbar from '../../components/HorizontalNavbar';
import './Home.css';

const Home = () => {
  return (
    <>
      <VerticalNavbar />
      <HorizontalNavbar />
      <div className="home-content">
        <h1>Accueil</h1>
        <Link to="/profile/12">Utilisateur 12</Link>
        <br />
        <Link to="/profile/18">Utilisateur 18</Link>
      </div>
    </>
  );
};

export default Home;
