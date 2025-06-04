import React from 'react';
import styles from './ActivityFeed.module.css';
import activityData from '../Data/activityData';

function ActivityFeed() {
  return (
    <div className={styles.activityFeed}>
      <h3 className={styles.title}>
        Activity <span className={styles.subtitle}>3 appointments this week</span>
      </h3>
      <div className={styles.chart}>
        {activityData.map((data) => (
          <div key={data.label} className={styles.barGroup}>
            <div className={styles.bars}>
              {data.values.map((val, i) => (
                <div
                  key={i}
                  className={styles.bar}
                  style={{
                    height: `${val.height}px`,
                    backgroundColor: val.color,
                    width: val.color === '#00D0FF' ? '3px' : '3px',
                  }}
                />
              ))}
            </div>
            <span className={styles.day}>{data.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
