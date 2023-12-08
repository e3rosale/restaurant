import Layout from "@/components/Layout";
import { CartContextProvider } from "@/context/CartContext/CartContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}
