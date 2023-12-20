import "../global.css";

export default function MyApp({ Component, pageProps }: any) {
  console.log("_app is rendering...");
  return <Component {...pageProps} />;
}
