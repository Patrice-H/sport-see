import calorieImg from '../../assets/calorie.png';
import proteinImg from '../../assets/protein.png';
import carbohydrateImg from '../../assets/carbohydrate.png';
import lipidImg from '../../assets/lipid.png';
import PropTypes from 'prop-types';
import './InfoCard.css';

/**
 * Component that returns a card with an icon and key informations
 *
 * @component
 * @param {string} type - The information type
 * @param {number} value - The amount
 * @returns {JSX} The React component.
 */
const InfoCard = ({ type, value }) => {
  let imgSrc;
  let cardLegend;

  switch (type) {
    case 'calorie':
      imgSrc = calorieImg;
      cardLegend = 'Calories';
      break;
    case 'protein':
      imgSrc = proteinImg;
      cardLegend = 'Protéines';
      break;
    case 'carbohydrate':
      imgSrc = carbohydrateImg;
      cardLegend = 'Glucides';
      break;
    case 'lipid':
      imgSrc = lipidImg;
      cardLegend = 'Lipides';
      break;
    default:
      break;
  }

  return (
    <article className="info-card">
      <div className={`card-picture ${type}`}>
        <img src={imgSrc} alt={type} />
      </div>
      <div>
        <p className="text-value">
          {type === 'calorie' ? (
            <>
              <span>{new Intl.NumberFormat('en-IN').format(value)}</span>
              <span>kCal</span>
            </>
          ) : (
            <>
              <span>{value}</span>
              <span>g</span>
            </>
          )}
        </p>
        <p className="text-legend">{cardLegend}</p>
      </div>
    </article>
  );
};

InfoCard.prototype = {
  type: PropTypes.string,
  value: PropTypes.number,
};

export default InfoCard;
