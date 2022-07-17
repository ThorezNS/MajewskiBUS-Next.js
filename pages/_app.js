import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MajewskiBUS</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Piotr Majewski & Dariusz Majewski - obsługujemy wycieczki, wesela, transport krajowy i międzynarodowy. Nowy Sącz, Podegrodzie i okolice"
        />
        <meta name="author" content="Maciej Niemiec" />
        <link rel="icon" href="bus-icon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
