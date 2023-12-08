import { useCartState } from "@/context/CartContext/CartContext";
import styles from "@/styles/Cart.module.css";
import Image from "next/image";

const ShowProductExtras = ({ extras }) => {
  const extrasToShow = extras.filter((extra) => extra.selected === true).map((extra) => extra.name);

  if (extrasToShow.length === 0) {
    return <span className={styles.extras}>No extras</span>;
  }

  return <span className={styles.extras}>{extrasToShow.join(", ")}</span>;
};

const Cart = () => {
  const [cartState, cartStateDispatch] = useCartState();
  console.log("[Cart] cartState: ", cartState);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartState.products.map(({ product, price, quantity }, index) => (
              <tr className={styles.tr} key={index}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image src={product.image} fill={true} alt="" className={styles.img} />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.name}</span>
                </td>
                <td>
                  <ShowProductExtras extras={product.extras} />
                </td>
                <td>
                  <span className={styles.price}>${price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>${price * quantity}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>
            {cartState.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cartState.total}
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
