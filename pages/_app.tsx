import { AppProps } from 'next/dist/next-server/lib/router/router';
 import { QueryClient, QueryClientProvider,
 } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '../styles/globals.css';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline/index';
import { Provider } from 'react-redux';
import { Provider as AuthProvider } from 'next-auth/client';
import materialTheme from '../material-ui/theme-default-overrides';
import { store as reduxStore } from '../redux/store';
import LoggedInPodcastPlayer from '../components/LoggedInPodcastPlayer';

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={materialTheme}>
      <CssBaseline />
      <StylesProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <Provider store={reduxStore}>
          <AuthProvider session={pageProps.session}>
            <Component {...pageProps} />
            <LoggedInPodcastPlayer />
            <ReactQueryDevtools initialIsOpen={false} position="top-left" />
          </AuthProvider>
        </Provider>
        </QueryClientProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
