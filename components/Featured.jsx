import Image from "next/image";
import styles from "../styles/Featured.module.css";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = ["/img/featured.png", "/img/featured2.png", "/img/featured3.png"];

  const handleArrowClick = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : images.length - 1);
    }

    if (direction === "r") {
      setIndex(index !== images.length - 1 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrowClick("l")}>
        <Image src="/img/arrowl.png" alt="" fill={true} style={{ objectFit: "contain" }} />
      </div>
      <div className={styles.wrapper} style={{ width: images.length * 100 + "vw", transform: `translateX(${-100 * index}vw)` }}>
        {images.map((image, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image src={image} alt="" fill={true} style={{ objectFit: "contain" }} />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrowClick("r")}>
        <Image src="/img/arrowr.png" alt="" fill={true} style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
};

export default Featured;
