/**
 * Component that returns text indicating a server error
 *
 * @component
 * @returns {JSX} The React component.
 */
const Error500 = () => {
  return (
    <>
      <p className="big-number">500</p>
      <p className="text">Désolé, une erreur réseau s'est produite.</p>
    </>
  );
};

export default Error500;
