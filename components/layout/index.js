import Head from 'next/head';
import PropTypes from 'prop-types';

import { useTheme } from '../../pages/_app';
import styles from './layout.module.css';
import { LTR_THEME, RTL_THEME } from '../../constants/general';

const Layout = ({ children }) => {
  const [theme] = useTheme();

  return (
    <>
      <Head>
        <title>Seez</title>
      </Head>
      <main className={styles.container}>{children}</main>
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
