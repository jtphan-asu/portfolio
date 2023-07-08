import '@/styles/globals.css';
import Layout from '@/components/Layout';

//_app.js function is to add the Layout component to pages by 
// wrapping the page content in it
export default function App({ Component, pageProps }) {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}