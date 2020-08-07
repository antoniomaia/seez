import PropTypes from 'prop-types';
import styles from './search-input.module.css';

const SearchInput = ({ searchTerm, handleChange }) => {
  return (
    <div className={styles.container}>
      <h1>Let's find Chuck Norris facts</h1>
      <div className={styles.searchBar}>
        <label htmlFor="search-input">
          <input
            type="text"
            id="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
        </label>
        <img src="search.svg" alt="magnifying glass" className={styles.icon} />
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchInput;
