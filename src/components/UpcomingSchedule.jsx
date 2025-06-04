import React from 'react';
import styles from './UpcomingSchedule.module.css';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingAppointments, scheduleAppointments } from '../Data/appointments';

function UpcomingSchedule() {
  return (
    <div className={styles.upcomingSchedule}>
      
      {/* Today's Appointments */}
      <div className={styles.section}>
        <div className={styles.cards}>
          {upcomingAppointments.map(apt => (
            <SimpleAppointmentCard key={apt.id} {...apt} style = {{width: apt.width, ...apt.style}} /> 
          ))}
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className={styles.section}>
        <div className={styles.header}>
          <h3 className={styles.upcomeHeader}>The Upcoming Schedule</h3>
        </div>
        {scheduleAppointments.map(day => (
          <div key={day.day} className={styles.scheduleSection}>
            <h4>On {day.day}</h4>
            <div className={styles.cards}>
              {day.appointments.map(apt => (
                <SimpleAppointmentCard key={apt.id} {...apt} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingSchedule;
