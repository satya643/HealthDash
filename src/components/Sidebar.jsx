/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ChartSpline, Settings, LayoutGrid, ArrowUpDown, CalendarDays, MessageCircleMore} from 'lucide-react';
import { LiaPhoneSolid } from "react-icons/lia";
import styles from './Sidebar.module.css';
import { CiSquarePlus } from "react-icons/ci";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h1 className={styles.logo}>Health<span className={styles.dot}>care.</span></h1>



      <nav className={styles.nav}>
        <p className={styles.sectionTitle}>General</p>
        <div className={styles.navSection}>
          <a href="#" className={`${styles.navItem} ${styles.active}`}>
            <LayoutGrid className={styles.icon} />
            Dashboard
          </a>
          <a href="#" className={styles.navItem}>
            <ArrowUpDown className={styles.icon} />
            History
          </a>
          <a href="#" className={styles.navItem}>
           <CalendarDays className={styles.icon} />
            Calendar
          </a>
          <a href="#" className={styles.navItem}>
            <CiSquarePlus size={25} className={styles.icon} />
            Appointments
          </a>
          <a href="#" className={styles.navItem}>
            <ChartSpline className={styles.icon} />
            Statistics
          </a>
        </div>
        <div className={styles.navSection}>
          <p className={styles.sectionTitle}>Tools</p>
          <a href="#" className={styles.navItem}>
            <MessageCircleMore className={styles.icon} />
            Chat
          </a>
          <a href="#" className={styles.navItem}>
            <LiaPhoneSolid size={25} className={styles.icon} />
            Support
          </a>
        </div>
      </nav>

      <div className={styles.footer}>
        <a href="#" className={styles.navItem} >
          <Settings className={styles.icon} />
          Settings
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
// {/* <FileChartLine />
// <ArrowDownUp /> */}