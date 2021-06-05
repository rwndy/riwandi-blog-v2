import { initGA, logPageView } from '../analytic'
import Router from 'next/router'
import '../styles/main.scss'

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);
  return <Component {...pageProps} />
}