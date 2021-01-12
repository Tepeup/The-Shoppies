import Head from "next/head";
import MovieSearch from "../components/MovieSearch";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Shoppies by Tepeu Potter</title>
        <meta name="author" content="Tepeu Potter"></meta>
        <meta name="description" content="Shopify movie nomination"></meta>
        <meta
          name="keywords"
          content="shopify, shoppies, newest, intern"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossorigin="anonymous"
        ></link>
      </Head>
      <main>
        <MovieSearch />
      </main>
    </div>
  );
}
