import Head from "next/head";
import type { AppProps } from "next/app";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
    <div className="root">
        <Head>
            <title>Salty Simulations</title>
        </Head>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
    </div>
);

export default App;
