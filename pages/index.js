import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";
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

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products/");
  const { data } = await res.json();
  const pizzaList = data ?? [];

  return { props: { pizzaList } };
};
