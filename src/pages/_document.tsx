import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    const isDev = process.env.NODE_ENV === "development";

    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          {isDev && <NextScript />}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
