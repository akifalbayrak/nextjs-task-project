import Document, { Html, NextScript, Head, Main } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <div id="overlays"></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
