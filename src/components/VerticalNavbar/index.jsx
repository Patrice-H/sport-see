import { Link } from 'react-router-dom';
import yoga from '../../assets/yoga.png';
import cycling from '../../assets/cycling.png';
import swimming from '../../assets/swimming.png';
import weightlifting from '../../assets/weightlifting.png';
import './VerticalNavbar.css';

const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <nav className="vertical-menu">
        <Link to="#" className="vertical-link">
          <img src={yoga} alt="yoga" />
        </Link>
        <Link to="#" className="vertical-link">
          <img src={cycling} alt="cyclisme" />
        </Link>
        <Link to="#" className="vertical-link">
          <img src={swimming} alt="natation" />
        </Link>
        <Link to="#" className="vertical-link">
          <img src={weightlifting} alt="haltérophilie" />
        </Link>
      </nav>
      <p className="vertical-text">Copyright, SportSee 2020</p>
    </div>
  );
};

export default VerticalNavbar;
