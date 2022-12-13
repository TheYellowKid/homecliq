import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 font-quicksand">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
