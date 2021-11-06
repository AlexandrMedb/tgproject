import React from "react";
import img from "../../image/exampleMap.png";
import styles from "./index.module.scss";

export const AnimatedImg = () => {
  return (
    <div className={styles.img}>
      <img
        src={img}
        alt="map"
        onMouseLeave={(e) => {
          setTimeout(() => {
            e.target.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg) `;
          }, 300);
        }}
        onMouseMove={(e) => {
          let newX = (e.clientX - window.innerWidth / 2) / 30;

          let newY = (e.clientY - e.target.y - e.target.offsetHeight / 2) / 30;

          e.target.style.transform = `perspective(800px) rotateY(${newX}deg) rotateX(${-newY}deg) `;
        }}
      />
    </div>
  );
};
