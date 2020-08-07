import { createContext, useContext, useState } from 'react';
import Head from 'next/head';

import '../styles/base.css';
import { LTR_THEME } from '../constants/general';

const Theme = createContext(undefined, undefined);

export const useTheme = () => useContext(Theme);

export function ThemeProvider({ theme, children }) {
  const [val, setTheme] = useState(theme);
  return <Theme.Provider value={[val, setTheme]}>{children}</Theme.Provider>;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Seez - António Maia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Chuck Norris Fact Searcher" />
        <meta
          name="description"
          content="Web application that allows users from different backgrounds to search Chuck Norris facts."
        />
      </Head>
      <ThemeProvider theme={LTR_THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
