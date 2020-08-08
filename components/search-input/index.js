import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './search-input.module.css';
import { useTheme } from '../../pages/_app';
import { isLtrTheme } from '../../utils/theme';
import { scrollToRef } from '../../utils/scroll';

const SearchInput = ({ searchTerm, handleChange, invalid }) => {
  const [theme] = useTheme();

  const containerRef = useRef(null);

  useEffect(() => {
    if (searchTerm) {
      scrollToRef(containerRef);
    }
  }, [searchTerm]);

  return (
    <div className={styles.container} ref={containerRef}>
      <label htmlFor="search-input">
        <h2>Let's find Chuck Norris facts</h2>
        <div
          className={cx(
            styles.searchBar,
            isLtrTheme(theme) ? styles.searchBarLtr : styles.searchBarRtl,
          )}
        >
          <input
            type="text"
            id="search-input"
            aria-invalid={invalid}
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
  invalid: PropTypes.bool.isRequired,
};

export default SearchInput;
