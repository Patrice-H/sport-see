import { Link } from 'react-router-dom';
import Error404 from '../../components/Error404';
import Error500 from '../../components/Error500';
import './Error.css';

/**
 * Component that return a 404 or 500 error page
 *
 * @component
 * @returns Error page
 */
const Error = () => {
  const errorType = window.location.href.split('error')[1];

  return (
    <section className="error">
      {errorType === '404' ? <Error404 /> : <Error500 />}
      <p className="backlink">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </p>
    </section>
  );
};

export default Error;
