import '../styles/globals.css';
import Head from 'next/dist/shared/lib/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link href="/tony-chen-logo.svg" />
                <title>Tony Chen</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
