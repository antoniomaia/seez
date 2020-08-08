import PropTypes from 'prop-types';

import Footer from '../footer';
import { useTheme } from '../../pages/_app';
import styles from './layout.module.css';
import { LTR_THEME, RTL_THEME } from '../../constants/general';

const Layout = ({ children }) => {
  const [theme] = useTheme();

  return (
    <>
      <main className={styles.container}>{children}</main>
      <Footer />
      <style global jsx>{`
        body {
          direction: ${theme === LTR_THEME ? LTR_THEME : RTL_THEME};
        }
      `}</style>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
