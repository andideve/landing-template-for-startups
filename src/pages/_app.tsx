import type { AppProps } from 'next/app';
import React from 'react';
import { Global } from '@emotion/react';
import { Provider, theme } from '@andideve/ds-react';

import '../styles/inter-fonts.css';
import { globalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Global styles={() => globalStyles(theme)} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
