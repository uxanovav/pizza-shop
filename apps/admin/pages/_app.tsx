import { AppProps } from 'next/app';
import Head from 'next/head';
import createCache from '@emotion/cache';
import './styles.css';
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import theme from '@pizza-shop/shared-frontend-components/src/lib/mui-theme';

type IAppPropertiesWithEmotion = AppProps & {
  emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createCache({ key: 'css' });

function CustomApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: IAppPropertiesWithEmotion) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Welcome to admin!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default CustomApp;
