import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <div>
    {message.map((error) => (
      <h4 key={error}>{error}</h4>
    ))}
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ErrorMessage;
