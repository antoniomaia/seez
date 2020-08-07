import { createContext, useContext, useState } from 'react';

import '../styles/base.css';

const Theme = createContext(undefined, undefined);

export const useTheme = () => useContext(Theme);

export function ThemeProvider({ theme, children }) {
  const [val, setTheme] = useState(theme);
  return <Theme.Provider value={[val, setTheme]}>{children}</Theme.Provider>;
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme="ltr">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
