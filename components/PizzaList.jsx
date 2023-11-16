import styles from "@/styles/PizzaList.module.css";
import PizzaCart from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie. Interfum et malesuada fames acme.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        <PizzaCart />
      </div>
    </div>
  );
};

export default PizzaList;
