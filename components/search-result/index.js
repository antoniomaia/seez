import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './search-result.module.css';
import { useTheme } from '../../pages/_app';
import { isLtrTheme } from '../../utils/theme';

const scrollToRef = ref => {
  window.scrollTo({
    top: ref.current.offsetTop - 150,
    behavior: 'smooth',
  });
};

const SearchResult = ({ result, total }) => {
  const [theme] = useTheme();

  if (total === 0) {
    return <h4 className={styles.empty}>Nothing to show</h4>;
  }
  const listRef = useRef(null);

  useEffect(() => {
    scrollToRef(listRef);
  }, []);

  return (
    <ul data-cy="facts-container" className={styles.result} ref={listRef}>
      {result.map(({ id, value, icon_url: iconUrl }) => (
        <li data-cy="facts-item" key={id}>
          <article>
            <img src={iconUrl} alt="Chuck Norris Avatar" />
            <span
              className={
                isLtrTheme(theme)
                  ? styles.descriptionLtr
                  : styles.descriptionRtl
              }
            >
              {value}
            </span>
          </article>
        </li>
      ))}
    </ul>
  );
};

SearchResult.propTypes = {
  result: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
};

export default SearchResult;
