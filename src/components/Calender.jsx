import React from 'react';
import { calendarData } from '../Data/calendarData';
import styles from './Calender.module.css';
import { MoveLeft, MoveRight } from 'lucide-react';

const todayDate = 26;
const todaySlot = '09:00';

const Calendar = () => (
  <div className={styles.calendar}>
    <header className={styles.header}>
      <h3 className={styles.title}>October 2021</h3>
      <div className={styles.navButtons}>
       <MoveLeft size={28} strokeWidth={0.5} absoluteStrokeWidth  className={styles.nav}/>
        <MoveRight size={28} strokeWidth={0.5} absoluteStrokeWidth  className={styles.nav} />
      </div>
    </header>

    <div className={styles.grid}>
 <div className={styles.slotBackground}></div>
      {calendarData.map((day, idx) => (
        <div key={idx} className={styles.dayColumn}>
          <span className={styles.dayName}>{day.day}</span>
          <span className={styles.date}>{day.date}</span>

          <div className={styles.events}>
            {day.slots.map((slot, i) => {
              let slots = styles.calendarSlot;
              const isToday = day.date === todayDate && slot === todaySlot;
              const isFuture = day.date > todayDate;
              const isHighlighted =
                (day.date === 28 && slot === '11:00') 
              const isCollape = 
              (day.date === 30 && slot === '12:00') ||
              (day.date === 31 && slot === '09:00'); 
              
              if(isCollape) {
                slots += ` ${styles.highlight}`;
              }

              if (isToday) {
                slots += ` ${styles.today}`;

              } else if (isFuture) {
                slots += ` ${styles.future}`;
              }

              if (isHighlighted) {
                slots += ` ${styles.blueHighlight}`;
              }

              return (
                <div key={i} className={slots}>
                  {slot}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Calendar;
