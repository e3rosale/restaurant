import styles from "@/styles/PizzaCard.module.css";
import Image from "next/image";

const PizzaCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/img/pizza.png" alt="" fill={true} className={styles.image} />
      </div>
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
    </div>
  );
};

export default PizzaCart;
