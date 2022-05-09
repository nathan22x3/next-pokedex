import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="application-name" content="Pokedex" />
          <meta name="description" content="A mini-encyclopedia of Pokémon species, types, evolutions, and moves." />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#ff5350" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="canonical" href="" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <meta name="apple-mobile-web-app-title" content="Pokedex" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-touch-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon-180x180.png" />
          <meta name="msapplication-TileColor" content="#ff5350" />
          <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
          <meta name="twitter:url" content="" />
          <meta name="twitter:title" content="Pokedex" />
          <meta
            name="twitter:description"
            content="A mini-encyclopedia of Pokémon species, types, evolutions, and moves."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:image" content="/images/logo.png" />
          <meta name="twitter:creator" content="@nathan22x3" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Pokedex" />
          <meta property="og:title" content="Pokedex" />
          <meta
            property="og:description"
            content="A mini-encyclopedia of Pokémon species, types, evolutions, and moves."
          />
          <meta property="og:image" content="/images/logo.png" />
          <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
