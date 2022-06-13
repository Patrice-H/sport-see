import calorieImg from '../../assets/calorie.png';
import proteinImg from '../../assets/protein.png';
import carbohydrateImg from '../../assets/carbohydrate.png';
import lipidImg from '../../assets/lipid.png';
import './InfoCard.css';

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

  console.log(`${type} : ${value}`);

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

export default InfoCard;
