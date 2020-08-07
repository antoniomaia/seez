import { useTheme } from '../../pages/_app';
import styles from './theme-toggle.module.css';
import { LTR_THEME, RTL_THEME } from '../../constants/general';
import { isLtrTheme } from '../../utils/theme';

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();
  const isLTR = isLtrTheme(theme);
  const handleToggle = () => setTheme(isLTR ? RTL_THEME : LTR_THEME);

  return (
    <article className={styles.container}>
      <button className={styles.button} type="button" onClick={handleToggle}>
        Switch to {isLTR ? 'RTL' : 'LTR'}
      </button>
    </article>
  );
};

export default ThemeToggle;
