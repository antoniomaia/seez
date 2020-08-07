import styles from './header.module.css';
import ThemeToggle from '../theme-toggle';

const Header = () => (
  <header className={styles.header}>
    <h1>Chuck Norris fact searcher</h1>
    <p>
      Use this web application to search Chuck Norris facts, using the Chuck
      Norris facts API. You can also switch to right to left styles.
    </p>
    <ThemeToggle />
  </header>
);

export default Header;
