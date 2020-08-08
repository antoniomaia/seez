import styles from './header.module.css';
import ThemeToggle from '../theme-toggle';

const Header = () => (
  <header className={styles.header}>
    <h1 data-cy="hero-title">Chuck Norris fact searcher</h1>
    <p data-cy="hero-paragraph">
      Use this web application to search Chuck Norris facts, using the{' '}
      <a href="https://api.chucknorris.io">Chuck Norris facts API</a>. You can
      also switch to right to left styles.
    </p>
    <ThemeToggle />
  </header>
);

export default Header;
