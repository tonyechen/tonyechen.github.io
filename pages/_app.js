import '../styles/globals.css';
import Head from 'next/dist/shared/lib/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link href="https://images-platform.99static.com//yKLNol6zH2gAAYH9mAp8ORh6o6g=/436x1870:1507x2941/fit-in/500x500/projects-files/37/3716/371609/6f1c6c29-ccce-4c3e-8050-ca71c2fa5c12.png" />
                <title>Tony Chen</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
