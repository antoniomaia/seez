import Head from 'next/head';
import PropTypes from 'prop-types';

import { useTheme } from '../../pages/_app';
import styles from './layout.module.css';

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
          direction: ${theme === 'ltr' ? 'ltr' : 'rtl'};
        }
      `}</style>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
