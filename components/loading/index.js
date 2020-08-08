import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './loading.module.css';
import { useTheme } from '../../pages/_app';
import { isLtrTheme } from '../../utils/theme';

const Loading = ({ animate }) => {
  const [theme] = useTheme();
  return (
    <div className={styles.loading}>
      <img
        src={animate ? 'chuck.gif' : 'chuck_static.jpg'}
        alt="Chuck Norris Animation"
        className={cx({ [styles.flip]: isLtrTheme(theme) })}
      />
    </div>
  );
};

Loading.propTypes = {
  animate: PropTypes.bool.isRequired,
};

export default Loading;
