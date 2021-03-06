import "../styles/globals.css";
import "normalize.css/normalize.css";
import Head from "next/head";
import { SEO } from "../Components/seo";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<SEO />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
