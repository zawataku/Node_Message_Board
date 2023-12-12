import '../styles/globals.css'; // 旧来のグローバルCSSをここでimport

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;