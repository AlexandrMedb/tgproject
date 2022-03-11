import React from 'react';
import img from '../../image/exampleMap.png';
import styles from './index.module.scss';

export const AnimatedImg = () => {
  return (
    <div className={styles.img}>
      <img
        src={img}
        alt="map"
        onMouseLeave={(e) => {
          setTimeout(() => {
            // eslint-disable-next-line max-len
            e.target.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg) `;
          }, 300);
        }}
        onMouseMove={(e) => {
          const newX = (e.clientX - window.innerWidth / 2) / 30;

          // eslint-disable-next-line max-len
          const newY = (e.clientY - e.target.y - e.target.offsetHeight / 2) / 30;

          // eslint-disable-next-line max-len
          e.target.style.transform = `perspective(800px) rotateY(${newX}deg) rotateX(${-newY}deg) `;
        }}
      />
    </div>
  );
};
