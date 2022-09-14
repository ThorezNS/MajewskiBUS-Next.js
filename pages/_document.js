import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pl-PL">
      <Head />
      <script
        src="https://kit.fontawesome.com/3b057449d3.js"
        crossOrigin="anonymous"
        defer
      ></script>
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+Da+2&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Genos&display=swap"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
