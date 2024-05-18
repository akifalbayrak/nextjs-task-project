import Document, { Html, NextScript, Head, Main } from "next/document";
import React from "react";

export default class MyDocument extends React.Component {
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
