import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useCartState } from "@/context/CartContext/CartContext";
import Link from "next/link";

const Navbar = () => {
  const [cartState] = useCartState();

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Link href={"/"}>
            <Image src="/img/logo.png" alt="" width="160" height="69" />
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href="/cart" passHref>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30" height="30" />
            <div className={styles.counter}>{cartState.quantity}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
