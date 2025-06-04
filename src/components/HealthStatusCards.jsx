/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './HealthStatusCards.module.css';
import { healthData } from '../Data/healthData';
import lungs from '../assets/icons8-lungs-30.png';


function HealthStatusCards() {
  return (
    <div className={styles.cardsContainer}>
      {healthData.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.cardIcon}>
            {item.name === 'Lungs' && <img src={lungs} alt="Lungs" className={`${styles.lungsIcon} ${styles.iconSize}`} />}
            {item.name === 'Teeth' && <span className={styles.iconSize}>🦷</span>}
            {item.name === 'Bone' && <span className={styles.iconSize}>🦴</span>}

            <h3 className={styles.cardTitle}>{item.name}</h3>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardDate}>Date: {item.date}</p>
            <div className={styles.progressBar} >
              <div className={styles.progress} style={{ width: `${item.value}%`, backgroundColor: item.color }} />
            </div>
          </div>
        </div>
      ))}
      <a href="#" className={styles.detailsLink}>Details →</a>
    </div>
  );
}

export default HealthStatusCards;
