import './Loader.css';

/**
 * Component that returns a loader while loading data
 *
 * @returns {JSX} The React component.
 */
const Loader = () => {
  return (
    <>
      <div className="loader"></div>
      <div className="loader-footer"></div>
    </>
  );
};

export default Loader;
