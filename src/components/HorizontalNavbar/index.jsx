import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './HorizontalNavbar.css';

/**
 * Component that returns the top horizontal nav bar
 *
 * @component
 * @returns {JSX} The React component.
 */
const HorizontalNavbar = () => {
  return (
    <nav className="horizontal-navbar">
      <div>
        <img src={logo} alt="SportSee" className="logo" />
      </div>
      <div className="main-menu">
        <Link to="/" className="profile-link">
          Accueil
        </Link>
        <Link to="#" className="profile-link">
          Profil
        </Link>
        <Link to="#" className="profile-link">
          Réglage
        </Link>
        <Link to="#" className="profile-link">
          Communauté
        </Link>
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
