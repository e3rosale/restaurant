import styles from "@/styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Link href={`/product/${pizza._id}`} passHref>
          <Image src={pizza.img} alt="" fill={true} className={styles.image} />
        </Link>
      </div>
      <h1 className={styles.title}>{pizza.name}</h1>
      <span className={styles.price}>${pizza.price[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
