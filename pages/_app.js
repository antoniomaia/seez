import { createContext, useContext, useState } from 'react';

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
    <ThemeProvider theme={LTR_THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
