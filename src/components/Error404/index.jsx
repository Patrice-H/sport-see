/**
 * Component that returns text indicating a non-existent page
 *
 * @component
 * @returns {JSX} The React component.
 */
const Error404 = () => {
  return (
    <>
      <p className="big-number">404</p>
      <p className="text">Oups! La page que vous demandez n'existe pas.</p>
    </>
  );
};

export default Error404;
