import styles from "@/styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Link href={`/product/${pizza._id}`} passHref>
          <Image src={pizza.image} alt="" fill={true} className={styles.image} />
        </Link>
      </div>
      <h1 className={styles.title}>{pizza.name}</h1>
      <span className={styles.price}>${pizza.sizes[0].price / 100}</span>
      <p className={styles.desc}>{pizza.description}</p>
    </div>
  );
};

export default PizzaCard;
