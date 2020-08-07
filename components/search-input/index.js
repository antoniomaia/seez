import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './search-input.module.css';
import { useTheme } from '../../pages/_app';
import { isLtrTheme } from '../../utils/theme';

const SearchInput = ({ searchTerm, handleChange }) => {
  const [theme] = useTheme();

  return (
    <div className={styles.container}>
      <label htmlFor="search-input">
        <h1>Let's find Chuck Norris facts</h1>
        <div
          className={cx(
            styles.searchBar,
            isLtrTheme(theme) ? styles.searchBarLtr : styles.searchBarRtl,
          )}
        >
          <input
            type="text"
            id="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
          <img
            src="search.svg"
            alt="magnifying glass"
            className={styles.icon}
          />
        </div>
      </label>
    </div>
  );
};

SearchInput.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchInput;
