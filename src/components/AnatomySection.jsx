import React from 'react';
import { ScanLine } from 'lucide-react';
import styles from './AnatomySection.module.css';
import humanBody from '../assets/human__1_-removebg-preview.png';

function AnatomySection() {
  return (
    <div className={styles.anatomySection}>
      <img src={humanBody} alt="Anatomical human body" className={styles.bodyImage} />

      <div className={styles.labels}>

        <div className={styles.scanContainer} style={{ top: '25%', left: '50%' }}>
          <div className={styles.scanIconWrapper}>
            <ScanLine className={styles.scanLineBase} size={39} strokeWidth={0.7} absoluteStrokeWidth color='blue' />
            <div className={styles.scanningEffect}></div>
          </div>
          <div
            className={styles.label}
            style={{
              top: '0px',
              left: '45px',
              backgroundColor: 'rgb(42, 26, 209)', // strong dark blue-purple
              color:'rgb(218, 218, 244)',
              padding: '6px 10px',
              borderRadius: '8px'
            }}
          >
            ❤️
            <span className={styles.labelText} style={{ color: 'inherit' }}>Healthy Heart</span>
          </div>
        </div>

        <div className={styles.scanContainer} style={{ top: '64%', left: '37%' }}>
          <div className={styles.scanIconWrapper}>
            <ScanLine size={39} strokeWidth={0.7} absoluteStrokeWidth color='blue' className={styles.scanLineBase} />
            <div className={styles.scanningEffect}></div>
          </div>
          <div
            className={styles.label}
            style={{
              top: '0px',
              right: '45px',
              backgroundColor: 'rgba(44, 54, 196, 0.52)',
              color: 'blue',
              fontSize: '14px',
              padding: '6px 10px',
              borderRadius: '8px'
            }}
          >
            🦵
            <span className={styles.labelText} style={{ color: 'inherit' }}>Healthy Leg</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AnatomySection;
