import { useCartState } from "@/context/CartContext/CartContext";
import { cartActionType } from "@/context/CartContext/CartReducer";
import styles from "@/styles/Product.module.css";
import { getPizzaData, getPizzaListIds } from "@/util/pizza";
import Image from "next/image";
import { useMemo, useState } from "react";

const sumPriceOfCheckedExtras = (accumulator, extra) => {
  if (extra.selected) {
    return accumulator + extra.price;
  }

  return accumulator + 0;
};

const Product = ({ pizza }) => {
  const [sizes, setSizes] = useState(pizza.sizes);
  const sizeCost = useMemo(() => {
    const sizeSelected = sizes.find((size) => size.selected === true);

    return sizeSelected.price;
  }, [sizes]);

  const [, cartStateDispatch] = useCartState();

  const [extras, setExtras] = useState(pizza.extras);
  const extrasCost = useMemo(() => {
    return extras.reduce(sumPriceOfCheckedExtras, 0);
  }, [extras]);

  const [quantity, setQuantity] = useState(1);

  const onSizeChange = (event) => {
    const newSize = event.target.value;
    const currentSizes = [...sizes];

    for (let i = 0; i < currentSizes.length; i++) {
      const currentSize = currentSizes[i];

      if (currentSize.name === newSize) {
        currentSize.selected = true;
      } else {
        currentSize.selected = false;
      }
    }

    setSizes(currentSizes);
  };

  const onExtraChange = (event, index) => {
    const currentExtras = [...extras];
    currentExtras[index].selected = event.target.checked;

    setExtras(currentExtras);
  };

  // Need to do validation here. Only allow non-negative integers greater than 0
  const onQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const onAddToCartButtonClick = () => {
    const pizzaToAdd = { ...pizza, sizes, extras };
    const productToAdd = {
      product: pizzaToAdd,
      price: sizeCost + extrasCost,
      quantity: quantity,
    };

    cartStateDispatch({ type: cartActionType.ADD_PRODUCT, payload: productToAdd });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.image} fill={true} alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${sizeCost + extrasCost}</span>
        <p className={styles.desc}>{pizza.description}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          {sizes.map((size) => (
            <div className={styles.size} key={size.name}>
              <input type="radio" value={size.name} name="size" id={size.name} checked={size.selected} onChange={onSizeChange} />
              <label htmlFor={size.name}>{size.name}</label>
            </div>
          ))}
        </div>
        {extras.length > 0 && (
          <>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
              {extras.map((extra, index) => (
                <div className={styles.option} key={extra.name}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    id={extra.name}
                    name={extra.name}
                    onChange={(e) => onExtraChange(e, index)}
                    checked={extra.selected}
                  />
                  <label htmlFor={extra.name}>{extra.name}</label>
                </div>
              ))}
            </div>
          </>
        )}
        <div className={styles.add}>
          <input type="number" className={styles.quantity} value={quantity} onChange={onQuantityChange} min={1} />
          <button className={styles.button} onClick={onAddToCartButtonClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPizzaListIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // If pizza is null, we should check in the page, and render an error component.
  const pizza = await getPizzaData(params.id);

  if (pizza !== null) {
    // For each pizza size option, add a selected property. Set the first one to true, all others to false.
    for (let i = 0; i < pizza.sizes.length; i++) {
      if (i === 0) {
        pizza.sizes[i].selected = true;
      } else {
        pizza.sizes[i].selected = false;
      }
    }

    // For each extra option item, add a checked property. Set this initial value to false.
    for (let i = 0; i < pizza.extras.length; i++) {
      pizza.extras[i].selected = false;
    }
  }

  return {
    props: {
      pizza,
    },
  };
};

export default Product;
