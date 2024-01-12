import PropTypes from 'prop-types';

const ErrorPage = ({ statusCode, message }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      <h1 className="text-white text-4xl md:text-7xl mb-4">Error {statusCode}</h1>
      <p className="text-white text-xl">{message || "Ha ocurrido un error."}</p>
    </div>
  );
};

ErrorPage.propTypes = {
  statusCode: PropTypes.any,
  message: PropTypes.string,
};

export default ErrorPage;
