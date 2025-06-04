import React from 'react';
import styles from './SimpleAppointmentCard.module.css';

const iconMap = {
  Tooth: '🦷',
  Arm: '💪🏻',
  Edit: '✏️',
  Eye: '👁️',
  Heart: '❤️',
  Brain: '🧑‍⚕️',
 Injection: '💉',
};

function SimpleAppointmentCard({ title, time, doctor, icon, style}) {
  return (
    <div className={styles.card} style={style} > 
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h5 className={styles.title}>{title}</h5>
           <span className={styles.icon}>{iconMap[icon]}</span>
        </div>
        <p className={styles.time}>{time}</p>
        {doctor && <p className={styles.doctor}>{doctor}</p>}
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
