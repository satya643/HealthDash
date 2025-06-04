import React from 'react';
import styles from './DashboardMainContent.module.css';
import DashboardOverview from './DashboardOverview';
import UpcomingSchedule from './UpcomingSchedule';
import Calendar from './Calender';
import { Bell, Search, Plus } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import userAvtar from '../assets/avatar_person_boy_male_people_guy_user_profile_metaverse_metapeople_short_tshirt_virtual_brown_curly_hair_young_jacket_man_icon_262240.png';

function DashboardMainContent() {
  return (
    <div className={styles.parentDashboard}>
      
      {/* Center Section */}
      <div className={styles.center}>
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} />
          <input type="text" placeholder="Search" className={styles.searchInput} />
          <Bell className={styles.bellIcon} />
        </div>

        <div className={styles.dashHead}>
          <h2 className={styles.title}>Dashboard</h2>
          <button className={styles.VieweThisWeek}>
  <span style={{ color: "blueviolet", fontSize: "x-small" }}>
    This Week{" "}
    <ChevronDown
      style={{
        color: "cornflowerblue",
        marginTop: "3px",
        padding: "5px",
        marginBottom: "-9px"
      }}
    />
  </span>
</button>
        </div>

        <DashboardOverview />
      </div>

        {/* Right Section */}
        <div className={styles.rightContainer}>
          <div className={styles.topRightIcons}>
            <img src={userAvtar} alt="User avatar" className={styles.avatar} />
            <Plus className={styles.plusIcon} />
          </div>

          <div className={styles.rightContent}>
            <Calendar />
            <UpcomingSchedule />
          </div>
        </div>

    </div>
  );
}

export default DashboardMainContent;
