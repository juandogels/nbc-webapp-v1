import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis';
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId="xhKFymPQ7v8ZTCAFKuq5ScWi1ghqB6lAiTIJvKQ8" serverUrl="https://tkg9evaktslz.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp
