import Head from 'next/head';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Seez</title>
    </Head>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
