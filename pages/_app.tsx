import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { BaseContext } from 'next/dist/shared/lib/utils';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps): BaseContext {
  useEffect(() => {
    // TODO: GTMのIDを設定する
    TagManager.initialize({ gtmId: 'GTM-N6F2KCR' });
  }, []);

  {/* @ts-expect-error Server Component */}
  return <Component {...pageProps} />;
}

export default MyApp;
