import '../styles/base.css';

const Theme = React.createContext();

export const useTheme = () => React.useContext(Theme);

export function ThemeProvider({ theme, children }) {
  const [val, setTheme] = React.useState(theme);
  return <Theme.Provider value={[val, setTheme]}>{children}</Theme.Provider>;
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={'ltr'}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
