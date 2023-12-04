import styles from "@/styles/Product.module.css";
import { getPizzaData, getPizzaListIds } from "@/util/pizza";
import Image from "next/image";
import { useState } from "react";

const sumPriceOfCheckedExtraOptions = (accumulator, currentExtraOption) => {
  if (currentExtraOption.checked) {
    return accumulator + currentExtraOption.price;
  }

  return accumulator + 0;
};

const Product = ({ pizza }) => {
  const [size, setSize] = useState(0);

  const addCheckedPropertyToExtraOptions = () => pizza.extraOptions.map((extraOption) => ({ ...extraOption, checked: false }));
  const [extraOptions, setExtraOptions] = useState(() => addCheckedPropertyToExtraOptions());
  const extraOptionsCost = extraOptions.reduce(sumPriceOfCheckedExtraOptions, 0);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} fill={true} alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size] + extraOptionsCost}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" fill={true} alt="Pizza size logo small" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" fill={true} alt="Pizza size logo medium" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" fill={true} alt="Pizza size logo large" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        {extraOptions.length > 0 && (
          <>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
              {extraOptions.map((extraOption, index) => (
                <div className={styles.option} key={extraOption.text}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    id={extraOption.text}
                    name={extraOption.text}
                    onChange={(e) => {
                      const currentExtraOptions = [...extraOptions];
                      const currentExtraOption = { ...currentExtraOptions[index], checked: e.target.checked };
                      currentExtraOptions[index] = currentExtraOption;
                      setExtraOptions(currentExtraOptions);
                    }}
                    checked={extraOption.checked}
                  />
                  <label htmlFor={extraOption.text}>{extraOption.text}</label>
                </div>
              ))}
            </div>
          </>
        )}
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
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
  const pizza = await getPizzaData(params.id);

  return {
    props: {
      pizza,
    },
  };
};

export default Product;
