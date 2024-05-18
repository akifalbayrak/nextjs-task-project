import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Notification from "../components/ui/notification";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>Next Events</title>
                <meta name="description" content="NextJS Events" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
            <Notification />
        </Layout>
    );
}

export default MyApp;
