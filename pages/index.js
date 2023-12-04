import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";
import { getPizzaList } from "@/util/pizza";
import Head from "next/head";

export default function Home({ pizzaList }) {
  return (
    <>
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </>
  );
}

export const getStaticProps = async () => {
  const pizzaList = await getPizzaList();

  return { props: { pizzaList } };
};
