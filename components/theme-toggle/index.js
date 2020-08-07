import { useTheme } from '../../pages/_app';
import styles from './theme-toggle.module.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();
  const isLTR = theme === 'ltr';
  return (
    <article className={styles.container}>
      <button
        className={styles.button}
        type="button"
        onClick={() => setTheme(isLTR ? 'rtl' : 'ltr')}
      >
        Switch to {isLTR ? 'RTL' : 'LTR'}
      </button>
    </article>
  );
};

export default ThemeToggle;
