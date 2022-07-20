import '../styles/globals.css';
import Head from 'next/head';
import favicon from '../public/images/favicon.png';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href={favicon.src} />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
