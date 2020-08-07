import PropTypes from 'prop-types';
import styles from './error.module.css';

const ErrorMessage = ({ message }) => (
  <article className={styles.error}>
    {message.map((error) => (
      <h4 key={error}>{error}</h4>
    ))}
  </article>
);

ErrorMessage.propTypes = {
  message: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ErrorMessage;
