import React from 'react';
import styles from './DashboardOverview.module.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';

function DashboardOverview() {
  return (
    <div className={styles.overview}>
      <div className={styles.topSection}>
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <ActivityFeed />
    </div>
  );
}

export default DashboardOverview;
