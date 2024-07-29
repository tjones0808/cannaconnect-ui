import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="uk-background-white text-primary"
    >
      <Head />
      <body className="uni-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
