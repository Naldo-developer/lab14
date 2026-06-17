import { Geist } from "next/font/google";
import "../styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={geist.className}>
      <Component {...pageProps} />
    </main>
  );
}
