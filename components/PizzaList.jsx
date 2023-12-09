import styles from "@/styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaCards = ({ pizzaList }) => {
  if (pizzaList.length !== 0) {
    return (
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard pizza={pizza} key={pizza._id} />
        ))}
      </div>
    );
  }

  return false;
};

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie. Interfum et malesuada fames acme.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <PizzaCards pizzaList={pizzaList} />
    </div>
  );
};

export default PizzaList;
